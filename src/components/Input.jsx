import React from "react";
import styled from "styled-components";

const StyledInput = styled.div`
  width: ${(props) => props.width ? props.width : "328px"};
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 28px 32px;
  border-radius: 6px;
  border: none;
  background-color: var(--White);

  input {
    width: 100%;
    padding-left: 16px;
    outline: none;
    border: none;
    font-size: 16px;
    color: var(--VeryDarkBlue);

    &::placeholder {
      color: var(--DarkGrey);
    }
  }
`

export default function Input({ icon: Icon, placeholder, width, id, style, onChange}) {
  const handleOnChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <StyledInput width={width} style={style}>
      { Icon && 
        <label htmlFor={id}>
          <Icon style={{fontSize: "24px", color: "var(--Violet)"}}/>
        </label>
      }
      <input type="text" id={id} placeholder={placeholder} onChange={handleOnChange}/>
    </StyledInput>
  )
}