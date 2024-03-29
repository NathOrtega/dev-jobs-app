import React from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";
import { FaSearch, FaFilter } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import FiltersModal from "./FiltersModal";
import { up, down, between } from "styled-breakpoints";
import { useBreakpoint } from "styled-breakpoints/react-styled";
import Checkbox from "./Checkbox";
import { useTheme } from "../contexts/ThemeContext";
import useGetResponsiveValue from "./utils/useGetResponsiveValue";

const StyledFilterBar = styled.form`
	height: 80px;
	width: 80%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	border-radius: 6px;
	margin: 0 auto;
	padding: 0 16px;
	position: absolute;
	top: 95px;
	left: 0;
	right: 0;
	z-index: 3;
	background-color: ${({ theme }) => theme.input.backgroundColor};

	${up("md")} {
		top: 120px;
	}
`;

const StyledBox = styled.div`
	width: fit-content;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

const StyledFilterButton = styled.button`
	width: 48px;
	height: 48px;
	font-size: 20px;
	margin-right: 10px;
	border: none;
	outline: none;
	cursor: pointer;
	color: var(--Neutral200);
	background-color: transparent;

	${up("md")} {
		display: none;
	}
`;
const SearchButton = styled(Button)`
	width: 48px;
	height: 48px;
	border-radius: 5px;

	${up("md")} {
		width: 80px;
	}

	${up("xl")} {
		width: 123px;
	}
`;

export default function FiltersBar({ jobOffers, onSearch }) {
	const [isOpen, setIsOpen] = React.useState(false);
	const [position, setPosition] = React.useState("");
	const [location, setLocation] = React.useState("");
	const [isFulltime, setIsFulltime] = React.useState(false);

	const { themeName } = useTheme();

	const inputStyles = {
		padding: "0",
		borderRight: "1px solid",
		borderRightColor:
			themeName === "light" ? "var(--Neutral300)" : "var(--DarkBg200)",
		borderTopRightRadius: "0",
		borderBottomRightRadius: "0",
	};

	React.useEffect(() => {
		if (isMobile) {
			onSearchClick();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location, isFulltime]);

	const handleOnClick = () => {
		setIsOpen((prevState) => (prevState === false ? true : false));
	};

	const handleOnPositionInputChange = (newValue) => {
		setPosition(newValue);
	};

	const handleOnLocationInputChange = (newValue) => {
		setLocation(newValue);
	};

	const handleOnFulltimeCheckboxChange = () => {
		setIsFulltime((prevValue) => !prevValue);
	};

	const handleModalOnSearch = ({ location, isFulltime }) => {
		setLocation(location);
		setIsFulltime(isFulltime);
		setIsOpen(false);
	};

	const onSearchClick = () => {
		const filteredOffers = jobOffers.filter((offer) => {
			let fullTimeMatches = true;
			const offerIsFulltime = offer.contract === "Full Time";
			if (isFulltime) {
				fullTimeMatches = isFulltime === offerIsFulltime;
			}
			const positionMatches = offer.position
				.toLowerCase()
				.includes(position.toLowerCase());
			const locationMatches = offer.location
				.toLowerCase()
				.includes(location.toLowerCase());

			return fullTimeMatches && positionMatches && locationMatches;
		});
		onSearch(filteredOffers);
	};

	const isMobile = useBreakpoint(down("md"));
	const isTablet = useBreakpoint(between("md", "xl"));
	const getResponsiveValue = useGetResponsiveValue();

	return (
		<StyledFilterBar
			onSubmit={(e) => {
				e.preventDefault();
				onSearchClick();
			}}
		>
			<Input
				icon={!isMobile && FaSearch}
				placeholder="Filter by title..."
				id="titleFilter"
				width={getResponsiveValue("60%", "30%", "35%")}
				style={isMobile ? { padding: 0 } : inputStyles}
				onChange={handleOnPositionInputChange}
				data-cy="titleFilter"
			/>
			{!isMobile && (
				<Input
					icon={!isMobile && MdLocationPin}
					placeholder="Filter by location..."
					id="locationFilter"
					width={getResponsiveValue("60%", "30%", "35%")}
					style={
						isMobile ? { padding: 0 } : { ...inputStyles, marginLeft: "16px" }
					}
					onChange={handleOnLocationInputChange}
					value={location}
					data-cy="locationFilter"
				/>
			)}
			<StyledBox>
				{!isMobile && (
					<Checkbox
						id="filterBarFulltime"
						label={isTablet ? "Full Time" : "Full Time Only"}
						isSelected={isFulltime}
						onChange={handleOnFulltimeCheckboxChange}
						style={{ marginRight: "20px" }}
						data-cy="fulltimeFilter"
					/>
				)}
				<StyledFilterButton onClick={handleOnClick}>
					<FaFilter />
				</StyledFilterButton>
				<SearchButton variant="Primary" onClick={onSearchClick} data-cy="searchButton">
					{isMobile ? <FaSearch style={{ fontSize: "20px" }} /> : "Search"}
				</SearchButton>
			</StyledBox>
			<FiltersModal
				isOpen={!isMobile ? false : isOpen}
				onClose={handleOnClick}
				onSearch={handleModalOnSearch}
				initialLocation={location}
				initialIsFulltime={isFulltime}
			/>
		</StyledFilterBar>
	);
}
