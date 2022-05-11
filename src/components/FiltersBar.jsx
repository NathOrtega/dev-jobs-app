import React from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";
import { FaSearch, FaFilter } from "react-icons/fa"
import Modal from "./Modal";

const StyledFilterBar = styled.div`
  height: 80px;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  margin: 0 auto;
  padding: 0 16px;
  position: absolute;
  bottom: -40px;
  left: 0;
  right: 0;
  background-color: ${({theme}) => theme.input.backgroundColor};
`

const StyledFilterButton = styled.button`
  width: 48px;
  height: 48px;
  font-size: 20px;
  margin-right: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  color: var(--Neutral200);
  background-color: transparent;
`

export default function FiltersBar() {
  const [ isOpen, setIsOpen ] = React.useState(false)

  const handleOnClick = () => {
    setIsOpen((prevState) => prevState === false ? true : false)
  }

  return (
    <StyledFilterBar>
      < Input 
        placeholder="Filter by title..." 
        id="titleFilter" 
        width="50%"
        style={{padding: 0}}
        onChange={(e) => {console.log(e)}}
      /> 
      <div>
        <StyledFilterButton onClick={handleOnClick}>
          <FaFilter />
        </StyledFilterButton>
        < Button
          variant="Primary" 
          style={{width: "48px", height: "48px", borderRadius: "5px"}}
        >
          <FaSearch style={{fontSize: "20px"}}/>
        </Button>
      </div>
      <Modal isOpen={isOpen} onClose={handleOnClick}></Modal>
    </StyledFilterBar>
  )
}