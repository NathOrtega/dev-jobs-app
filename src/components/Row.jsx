import React from "react";
import styled from "styled-components";
import { StyledColumn } from "./Column";
import { StyledHeading3 } from "./Typography";

const StyledRow = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (min-width:768px) {
    width: fit-content;
  }
`

export default function Row({ title, children }) {
  return (
    <StyledColumn>
      {title && <StyledHeading3>{title}</StyledHeading3>}
      <StyledRow>
        {children}
      </StyledRow>
    </StyledColumn>
  )
}