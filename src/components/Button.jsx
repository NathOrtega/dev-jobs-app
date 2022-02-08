import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 141px;
  height: 48px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  background-color: ${(props) => props.variant === "primary" ? "var(--Violet)" : "#EEEFFC"};
  color: ${(props) => props.variant === "primary" ? "var(--White)" : "var(--Violet)"};

  &:hover {
    background-color: ${(props) => props.variant === "primary" ? "var(--LightViolet)" : "#C5C9F4"};
  }
`

export default function Button({ variant, style, children, onClick }) {
  const buttonVariant = variant.toLowerCase() 
  const handleOnClick = () => {
    onClick()
  }

  return (
    <StyledButton variant={buttonVariant} style={style} onClick={handleOnClick}>
      {children}
    </StyledButton>
  )
}