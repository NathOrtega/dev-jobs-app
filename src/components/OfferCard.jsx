import React from "react";
import styled from "styled-components";
import {
	StyledHeading3,
	StyledParagraph,
	StyledHeading4,
} from "./designSystem/Typography";
import { Link } from "react-router-dom";
import { up } from "styled-breakpoints";
import imagesMap from "../resources/imagesMap";

const Container = styled.div`
	width: 327px;
	height: 228px;
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	background-color: ${({ theme }) => theme.card.backgroundColor};
	padding: 49px 32px;
	margin: 0 15px 50px;
	position: relative;
	cursor: pointer;

	${up("xl")} {
		width: 345px;
		margin: 0 28px 50px;
	}

	.logo {
		width: 50px;
		height: 50px;
		border-radius: 15px;
		background-color: var(--Neutral100);
		background-image: url(${({ logoURL }) => logoURL});
		background-repeat: no-repeat;
		background-size: cover;
		position: absolute;
		top: -25px;
	}

	div {
		height: 88px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
`;

export default function OfferCard({
	offerInfo,
	...rest
}) {
	return (
		<Link to={`/detail/${offerInfo.id}`} style={{ textDecoration: "none" }} {...rest}>
			<Container logoURL={imagesMap[offerInfo.id]}>
				<div className="logo" />
				<div>
					<StyledParagraph>
						{offerInfo.postedAt} • {offerInfo.contract}
					</StyledParagraph>
					<StyledHeading3>{offerInfo.position}</StyledHeading3>
					<StyledParagraph>{offerInfo.company}</StyledParagraph>
				</div>
				<StyledHeading4 color="var(--Primary)">{offerInfo.location}</StyledHeading4>
			</Container>
		</Link>
	);
}
