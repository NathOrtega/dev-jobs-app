import React from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";
import { FaSearch, FaFilter } from "react-icons/fa"
import { MdLocationPin } from "react-icons/md"
import FiltersModal from "./FiltersModal";
import { up, down, between } from "styled-breakpoints"
import { useBreakpoint } from "styled-breakpoints/react-styled";
import Checkbox from "./Checkbox";
import { useTheme } from "../contexts/ThemeContext";

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

const StyledBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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

  ${up("md")}{
    display: none;
  }
`
const SearchButton = styled(Button)`
  width: 48px; 
  height: 48px; 
  border-radius: 5px;

  ${up("md")}{
    width: 80px; 
  }

  ${up("xl")}{
    width: 123px; 
  }
`

export default function FiltersBar({ jobOffers, onSearch }) {
  const [ isOpen, setIsOpen ] = React.useState(false)
  const [ position, setPosition ] = React.useState("")
  const [ location, setLocation ] = React.useState("")
  const [ isFulltime, setIsFulltime ] = React.useState(false)

  const { themeName } = useTheme()

  const inputStyles = {
    padding: "0", 
    borderRight: "1px solid",
    borderRightColor: themeName === "light" ? "var(--Neutral300)" : "var(--DarkBg200)",
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
  }

  React.useEffect(() => {
    if (isMobile){
      onSearchClick()
    }
  }, [location, isFulltime])

  const handleOnClick = () => {
    setIsOpen((prevState) => prevState === false ? true : false)
  }

  const handleOnPositionInputChange = (newValue) => {
    setPosition(newValue)
  }

  const handleOnLocationInputChange = (newValue) => {
    setLocation(newValue)
  }

  const handleOnFulltimeCheckboxChange = () => {
    setIsFulltime(prevValue => !prevValue)
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

  const setResponsiveInputWidth = (mobile, tablet, desktop) => {
    if (isMobile) {
      return mobile
    } else if (isTablet) {
      return tablet
    } else {
      return desktop
    }
  }

  const isMobile = useBreakpoint(down("md"))
  const isTablet = useBreakpoint(between("md", "xl"))

  return (
    <StyledFilterBar>
      <Input 
        icon={!isMobile && FaSearch}
        placeholder="Filter by title..." 
        id="titleFilter" 
        width={ setResponsiveInputWidth("50%", "28%", "40%")}
        style={isMobile ? {padding: 0} : inputStyles}
        onChange={handleOnPositionInputChange}
      /> 
      { !isMobile &&
        <Input 
          icon={!isMobile && MdLocationPin}
          placeholder="Filter by location..." 
          id="locationFilter" 
          width={ setResponsiveInputWidth("50%", "32%", "26%")}
          style={isMobile ? {padding: 0} : {...inputStyles, marginLeft: "10px"}}
          onChange={handleOnLocationInputChange}
          value={location}
        /> 
      }
      <StyledBox>
        { !isMobile && 
          <Checkbox 
            id="filterBarFulltime"
            label={isTablet ? "Full Time" : "Full Time Only"} 
            isSelected={isFulltime}
            onChange={handleOnFulltimeCheckboxChange} 
            style={{marginRight: "20px"}}
          />
        }
        <StyledFilterButton onClick={handleOnClick}>
          <FaFilter />
        </StyledFilterButton>
        <SearchButton
          variant="Primary" 
          onClick={onSearchClick}
        >
          { isMobile ? <FaSearch style={{fontSize: "20px"}}/> : "Search"}
        </SearchButton>
      </StyledBox>
      <FiltersModal 
        isOpen={!isMobile ? false : isOpen} 
        onClose={handleOnClick} 
        onSearch={handleModalOnSearch} 
        initialLocation={location}
        initialIsFulltime={isFulltime}
      />
    </StyledFilterBar>
  )
}