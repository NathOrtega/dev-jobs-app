import React from "react";
import styled from "styled-components";
import { useTheme } from "../contexts/ThemeContext";

const StyledCheckbox = styled.div`
  width: 24px;
  height: 24px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  margin: 10px 16px 10px 10px;
  background-color: ${props => props.isActive ? "var(--Primary)" : "var(--Light300)"};
  cursor: pointer;

  &:hover {
    background-color: ${props => !props.isActive && "var(--SecondaryLight)"};
  }
`

const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-right: 10px;
  color: ${props => props.color};
  cursor: pointer;

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  &:hover input ~ div {
    background-color: ${props => !props.isActive && "var(--SecondaryLight)"};
  } 
`

export default function Checkbox({ id, label, isSelected, onChange, style }) {
  const { theme } = useTheme()

  return (
    < StyledLabel
      color={theme.checkbox.color}
      isActive={isSelected}
      htmlFor={id}
      style={style}
    >
      <input 
        id={id} 
        type="checkbox" 
        checked={isSelected} 
        onChange={onChange}
      />
      <StyledCheckbox isActive={isSelected}>
        { 
          isSelected 
          ? <img src="./resources/checkMark.svg" alt="Check Icon" />
          : null
        }
      </StyledCheckbox>
      {label && label}
    </StyledLabel>
  )
}