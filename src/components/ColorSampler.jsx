import React from "react";
import styled from "styled-components";
import { useTheme } from "../contexts/ThemeContext";

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
  border: ${({theme}) => theme === "light" ? "1px solid #D6D6D6" : "1px solid var(--Neutral200)"};
  border-radius: 28px;
  margin-right: 32px;
  background-color: ${(props) => props.cssColorConst};
`

const StyledColorInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h3 {
    font-size: 15px;
    font-weight: bold;
    color: ${({theme}) => theme.text.colorH3};
    margin-bottom: 10px;
  }

  p {
    font-size: 15px;
    color: var(--Neutral200);
  }
`

export default function ColorSampler({ title, hex, rgb, hsl, cssColorConst }) {
  const { themeName } = useTheme()
 
  return (
    <StyledColorSampler>
      <StyledColorContainer cssColorConst={cssColorConst} theme={themeName}/>
      <StyledColorInfoContainer>
        <h3>{title}</h3>
        <p> HEX: {hex} </p>
        <p> RGB: {rgb} </p>
        <p> HSL: {hsl} </p>
      </StyledColorInfoContainer>
    </StyledColorSampler>
  )
}