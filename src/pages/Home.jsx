import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import FiltersBar from "../components/FiltersBar";
import styled from "styled-components"
import Card from "../components/Card"
import fetchData from "../api";
import Button from "../components/Button";
import { StyledHeading3 } from "../components/designSystem/Typography";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 82px auto 49px;
  max-width: 1250px;
`

export default function Home() {
  const { theme } = useTheme()
  const [ jobOffers, setJobOffers ] = React.useState([])
  const [ filteredOffers, setFilteredOffers ] = React.useState([])
  const [ visibleJobOffers, setVisibleJobOffers ] = React.useState(6)

  const loadMoreJobOffers = () => {
    setVisibleJobOffers(prevValue => {
      if ((prevValue + 6) >= filteredOffers.length){
        return filteredOffers.length
      } else {
        return prevValue + 6
      }
    })
  }

  React.useEffect(() => {
    fetchData("/data.json")
      .then((data) => {
        setJobOffers(data)
        setFilteredOffers(data)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <React.Fragment>
      <div>
        <FiltersBar jobOffers={jobOffers} onSearch={(e) => setFilteredOffers(e)}/>
        {filteredOffers.length 
          ? <StyledContainer>
              {filteredOffers.slice(0, visibleJobOffers).map(({ id, logo, postedAt, contract, position, company, location} ) => {
                return (
                  <Card 
                    id={id}
                    key={id} 
                    logo={logo} 
                    postedAt={postedAt} 
                    contract={contract} 
                    position={position} 
                    company={company} 
                    location={location} 
                  />
              )})}
              <Button 
                variant="primary" 
                onClick={loadMoreJobOffers}
                style={visibleJobOffers >= filteredOffers.length ? {display: "none"} : null}
              >
                Load More
              </Button>
            </StyledContainer>
          :
          <StyledContainer>
            <StyledHeading3 color={theme.text.colorH3}>
              No matching results found
            </StyledHeading3>
          </StyledContainer>
        }
      </div>
    </React.Fragment>
  )
}