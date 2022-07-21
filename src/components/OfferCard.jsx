import React from "react";
import styled from "styled-components";
import {
	StyledHeading3,
	StyledParagraph,
	StyledHeading4,
} from "./designSystem/Typography";
import { Link } from "react-router-dom";
import { up } from "styled-breakpoints";
import logosMap from "../resources/logosMap";

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
	postedAt,
	contract,
	position,
	company,
	location,
	id,
}) {
	return (
		<Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
			<Container logoURL={logosMap[id].default}>
				<div className="logo" />
				<div>
					<StyledParagraph>
						{postedAt} • {contract}
					</StyledParagraph>
					<StyledHeading3>{position}</StyledHeading3>
					<StyledParagraph>{company}</StyledParagraph>
				</div>
				<StyledHeading4 color="var(--Primary)">{location}</StyledHeading4>
			</Container>
		</Link>
	);
}
