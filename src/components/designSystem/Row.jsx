import React from "react";
import styled from "styled-components";
import { StyledColumn } from "./Column";
import { StyledHeading3 } from "./Typography";

const StyledRow = styled.div`
	width: 300px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: flex-start;
`;

export default function Row({ title, children }) {
	return (
		<StyledColumn>
			{title && (
				<StyledHeading3 style={{ marginBottom: "20px" }}>
					{title}
				</StyledHeading3>
			)}
			<StyledRow>{children}</StyledRow>
		</StyledColumn>
	);
}
