import React, { useEffect } from "react";
import styled from "styled-components";

const StyledToggle = styled.div`
  width: 112px;
  height: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

const StyledSwitch = styled.label`
  width: 48px;
  height: 24px;
  padding: 5px;
  margin: 0 16px;
  cursor: pointer;
  position: relative;
  border-radius: 12px;
  background-color: var(--White);

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
    background-color: var(--Violet);
    transition: margin 0.4s linear;
  }

  input:checked + span {
    margin-left: 22px;
  }

  &:hover {
    span {
      background-color: var(--LightViolet);
    }
  }
`

export default function Toggle({ onClick, leftImageSrc, rightImageSrc, rightImageStyle, leftImageStyle }) {
  const [ isToggled, setIsToggled ] = React.useState(false)

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
      <img src={leftImageSrc} style={leftImageStyle} />
    </StyledToggle>
  )
}