import React from "react";
import styled from "styled-components";

const StyledCheckbox = styled.div`
  width: 24px;
  height: 24px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  margin: 10px 16px 10px 10px;
  background-color: ${props => props.isActive ? "var(--Violet)" : "#E7E8E9"};
  cursor: pointer;

  &:hover {
    background-color: ${props => !props.isActive && "#D6D8F7"};
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
    background-color: ${props => !props.isActive && "#D6D8F7"};
  } 
`

export default function Checkbox({ id, label, onChange }) {
  const [ isActive, setIsActive ] = React.useState(false)

  const handleOnChange = () => {
    setIsActive((prevState) => prevState === true ? false : true)
  }

  React.useEffect(() => {
    onChange(isActive)
  })

  return (
    < StyledLabel
      color="var(--VeryDarkBlue)"
      isActive={isActive}
      htmlFor={id}
    >
      < input 
        id={id} 
        type="checkbox" 
        checked={isActive} 
        onChange={handleOnChange}
      />
      <StyledCheckbox isActive={isActive}>
        { 
          isActive 
          ? <img src="./resources/checkMark.svg" alt="Check Icon" />
          : null
        }
      </StyledCheckbox>
      {label && label}
    </StyledLabel>
  )
}