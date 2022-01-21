import React from "react";
import styled from "styled-components";

const StyledColorSampler = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const StyledColorContainer = styled.div`
  width: 80px;
  height: 80px;
  border: ${(props) => props.isLight ? "1px solid #D6D6D6" : "none"};
  border-radius: 28px;
  margin-right: 32px;
  background-color: ${(props) => props.hex};
`

const StyledColorInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h3 {
    font-size: 15px;
    font-weight: bold;
    color: var(--VeryDarkBlue);
    margin-bottom: 10px;
  }

  p {
    font-size: 15px;
    color: var(--DarkGrey);
  }
`

export default function ColorSampler({ title, hex, rgb, hsl, isLight }) {
  return (
    <StyledColorSampler>
      <StyledColorContainer hex={hex} isLight={isLight}/>
      <StyledColorInfoContainer>
        <h3>{title}</h3>
        <p> HEX: {hex} </p>
        <p> RGB: {rgb} </p>
        <p> HSL: {hsl} </p>
      </StyledColorInfoContainer>
    </StyledColorSampler>
  )
}