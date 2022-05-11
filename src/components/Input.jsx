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
  background-color: ${({ theme }) => theme.input.backgroundColor};

  input {
    width: 100%;
    outline: none;
    border: none;
    font-size: 16px;
    background-color: transparent;
    color: ${({ theme }) => theme.input.color};

    &::placeholder {
      color: ${({ theme }) => theme.input.placeholder.color};
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
          <Icon style={{fontSize: "24px", color: "var(--Primary)"}}/>
        </label>
      }
      <input type="text" id={id} placeholder={placeholder} onChange={handleOnChange} style={{paddingLeft: Icon ? "16px" : "0"}}/>
    </StyledInput>
  )
}