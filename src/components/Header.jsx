import styled from "styled-components";
import { up } from "styled-breakpoints";
import { StyledLogo } from "./StyledLogo";
import { useLocation, Link } from "react-router-dom";
import { StyledHeading2 } from "./designSystem/Typography";
import { darkTheme } from "../Theme";
import { FaPaintBrush } from "react-icons/fa";
import ToggleTheme from "./ToggleTheme";
import imagesMap from "../resources/imagesMap";

const StyledHeader = styled.div`
	width: 100%;
	height: 136px;
	padding: 36px 24px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: space-between;
	background-image: url(${({ mobileBg }) => mobileBg});
	background-size: cover;
	position: relative;

	${up("md")} {
		height: 160px;
		padding: 42px 40px;
		border-bottom-left-radius: 100px;
		background-image: url(${({ tabletBg }) => tabletBg});
	}

	${up("xl")} {
		height: 162px;
		padding: 45px 165px;
		background-image: url(${({ desktopBg }) => desktopBg});
	}
`;

const Container = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

const iconStyles = {
	fontSize: "20px",
	color: "var(--Light100)",
	margin: "10px 0 0 20px",
};

export default function Header({ logo }) {
	const location = useLocation();

	return (
		<StyledHeader
			mobileBg={imagesMap.headerBgMobile}
			tabletBg={imagesMap.headerBgTablet}
			desktopBg={imagesMap.headerBgDesktop}
		>
			<Container>
				<StyledLogo to="/">{logo}</StyledLogo>
				{location.pathname === "/design-system" ? null : (
					<Link to="/design-system">
						<FaPaintBrush style={iconStyles} />
					</Link>
				)}
			</Container>
			{location.pathname === "/design-system" ? (
				<StyledHeading2 color={darkTheme.text.colorH3}>
					Design System
				</StyledHeading2>
			) : (
				<ToggleTheme />
			)}
		</StyledHeader>
	);
}
