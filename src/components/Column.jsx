import React from "react";
import styled from "styled-components";

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 40px;

  h3 {
    font-size: 20px;
    font-weight: bold;
    color: var(--VeryDarkBlue);
  }
`

export default function Column({ title, children }) {
  return (
    <StyledColumn>
      {title && <h3>{title}</h3>}
      {children}
    </StyledColumn>
  )
}