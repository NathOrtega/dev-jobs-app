import React from "react";
import styled from "styled-components";
import { StyledColumn } from "./Column";
import { StyledHeading3 } from "./Typography";
import { useTheme } from "../../contexts/ThemeContext";

const StyledRow = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`

export default function Row({ title, children }) {
  const { theme } = useTheme()
  return (
    <StyledColumn>
      {title && <StyledHeading3 style={{marginBottom: "20px"}} color={theme.text.colorH3}>
        {title}
      </StyledHeading3>}
      <StyledRow>
        {children}
      </StyledRow>
    </StyledColumn>
  )
}