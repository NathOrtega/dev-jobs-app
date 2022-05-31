import React from "react";
import styled from "styled-components";
import { useTheme } from "../contexts/ThemeContext";

const StyledToggle = styled.div`
  width: 112px;
  height: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin: 0;
`

const StyledSwitch = styled.label`
  width: 48px;
  height: 24px;
  padding: 5px;
  margin: 0 16px;
  cursor: pointer;
  position: relative;
  border-radius: 12px;
  background-color: var(--Light100);

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }
  
  span {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    position: absolute;
    background-color: var(--Primary);
    transition: margin 0.4s linear;
  }

  input:checked + span {
    margin-left: 22px;
  }

  &:hover {
    span {
      background-color: var(--Secondary);
    }
  }
`

export default function Toggle({ onClick, leftImageSrc, rightImageSrc, rightImageStyle, leftImageStyle, toggled }) {
  const { themeName } = useTheme()
  const [ isToggled, setIsToggled ] = React.useState(toggled ? toggled : themeName === "dark")

  const onToggled = () => {
    setIsToggled((prevState) => prevState === false ? true : false)
  }

  React.useEffect(() => {
    onClick(isToggled)
  }, [isToggled])

  return (
    <StyledToggle>
      <img src={rightImageSrc} style={rightImageStyle}/>
      <StyledSwitch> 
        <input type="checkbox" checked={isToggled} onChange={onToggled}/>
        <span></span>
      </StyledSwitch>
      <img src={leftImageSrc} style={leftImageStyle}/>
    </StyledToggle>
  )
}