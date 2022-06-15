import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
	width: 327px;
	height: 205px;
	border: none;
	border-radius: 6px;
	background-color: ${({ theme }) => theme.card.backgroundColor};
`;

export default function Card({ children, className }) {
	return <StyledCard className={className}>{children}</StyledCard>;
}
