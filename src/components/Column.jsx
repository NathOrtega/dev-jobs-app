import React from "react";
import styled from "styled-components";
import { StyledHeading3 } from "./Typography";

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 40px;
`

export default function Column({ title, children }) {
  return (
    <StyledColumn>
      {title && <StyledHeading3>{title}</StyledHeading3>}
      {children}
    </StyledColumn>
  )
}