import React from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";
import { FaSearch, FaFilter } from "react-icons/fa"
import FiltersModal from "./FiltersModal";

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

export default function FiltersBar({ jobOffers, onSearch }) {
  const [ isOpen, setIsOpen ] = React.useState(false)
  const [ position, setPosition ] = React.useState("")
  const [ location, setLocation ] = React.useState("")
  const [ isFulltime, setIsFulltime ] = React.useState(false)

  React.useEffect(() => {
    onSearchClick()
  }, [location, isFulltime])

  const handleOnClick = () => {
    setIsOpen((prevState) => prevState === false ? true : false)
  }

  const handleOnPositionInputChange = (newValue) => {
    setPosition(newValue)
  }

  const handleModalOnSearch = ({location, isFulltime}) => {
    setLocation(location)
    setIsFulltime(isFulltime)
    setIsOpen(false)
  } 

  const onSearchClick = () => {
    const filteredOffers = jobOffers.filter((offer) => 
      offer.position.toLowerCase().includes(position.toLowerCase())
    ).filter((offer) => 
      location ? offer.location.toLowerCase().includes(location.toLowerCase()) : true
    ).filter((offer) => 
      isFulltime ? offer.contract === "Full Time" : true
    )
    onSearch(filteredOffers)
  }

  return (
    <StyledFilterBar>
      <Input 
        placeholder="Filter by title..." 
        id="titleFilter" 
        width="50%"
        style={{padding: 0}}
        onChange={handleOnPositionInputChange}
      /> 
      <div>
        <StyledFilterButton onClick={handleOnClick}>
          <FaFilter />
        </StyledFilterButton>
        < Button
          variant="Primary" 
          style={{width: "48px", height: "48px", borderRadius: "5px"}}
          onClick={onSearchClick}
        >
          <FaSearch style={{fontSize: "20px"}}/>
        </Button>
      </div>
      <FiltersModal 
        isOpen={isOpen} 
        onClose={handleOnClick} 
        onSearch={handleModalOnSearch} 
        initialLocation={location}
        initialIsFulltime={isFulltime}
      />
    </StyledFilterBar>
  )
}