import React from "react";
import Modal from "./Modal";
import Input from "./Input";
import Button from "./Button";
import Checkbox from "./Checkbox";
import { MdLocationPin } from "react-icons/md";

const inputStyles = {
	borderBottom: "1px solid rgba(100, 128, 152, .3)",
	borderTopLeftRadius: "6",
	borderTopRightRadius: "6",
	borderBottomLeftRadius: "0",
	borderBottomRightRadius: "0",
	marginBottom: "12px",
};

const onSearchButtonStyles = {
	width: "279px",
	margin: "0 24px 24px",
};

export default function FiltersModal({
	isOpen,
	onClose,
	onSearch,
	initialLocation,
	initialIsFulltime,
}) {
	const [location, setLocation] = React.useState(initialLocation);
	const [isFulltime, setIsFulltime] = React.useState(initialIsFulltime);

	React.useEffect(() => {
		if (isOpen) {
			setLocation(initialLocation);
			setIsFulltime(initialIsFulltime);
		}
	}, [isOpen]);

	const handleOnInputChange = (newValue) => {
		setLocation(newValue);
	};

	const handleOnCheckboxChange = () => {
		setIsFulltime((prevValue) => !prevValue);
	};

	const handleOnClose = () => {
		setLocation(initialLocation);
		setIsFulltime(initialIsFulltime);
		onClose();
	};

	const isDisabled =
		location === initialLocation && isFulltime === initialIsFulltime;

	return (
		<Modal isOpen={isOpen} onClose={handleOnClose}>
			<Input
				icon={MdLocationPin}
				width="100%"
				placeholder="Filter by location…"
				style={inputStyles}
				value={location}
				onChange={handleOnInputChange}
			/>
			<Checkbox
				id="modalFulltime"
				label="Full Time Only"
				style={{ width: "fit-content", margin: "0 24px 12px" }}
				isSelected={isFulltime}
				onChange={handleOnCheckboxChange}
			/>
			<Button
				onClick={() => onSearch({ location, isFulltime })}
				disabled={isDisabled}
				variant={isDisabled ? "primaryDisabled" : "primary"}
				style={onSearchButtonStyles}
			>
				Search
			</Button>
		</Modal>
	);
}
