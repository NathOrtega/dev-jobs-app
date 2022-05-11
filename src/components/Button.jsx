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
  background-color: ${({ variant, theme }) => 
    variant === "primary" 
    ? theme.button.variants.primary.backgroundColor
    : theme.button.variants.secondary.backgroundColor
  };
  color: ${({ variant, theme }) => 
    variant === "primary" 
    ? theme.button.variants.primary.color
    : theme.button.variants.secondary.color
  };

  &:hover {
    background-color: ${({ variant, theme }) => 
      variant === "primary" 
      ? theme.button.variants.primary.hover.backgroundColor
      : theme.button.variants.secondary.hover.backgroundColor
    };
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