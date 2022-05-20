import React from "react";
import { useParams } from "react-router-dom";
import { fetchOffer } from "../api";
import Card from "../components/Card";
import styled from "styled-components"
import { StyledHeading3, StyledParagraph, StyledHeading4 } from "../components/designSystem/Typography";
import { useTheme } from "../contexts/ThemeContext"
import Button from "../components/Button";
import DetailsFragment from "../components/DetailsFragment";
import { BsDot } from "react-icons/bs"

const StyledLogo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  background-color: var(--Neutral100);
  background-image: url(${({ logoURL }) => logoURL});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
`

const StyledAnchor = styled.a`
  text-decoration: none;
`

const StyledHeaderCard = styled(Card)`
  position: absolute;
  top: 14%;
  left: 50%;
  transform: translateX(-50%);
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`

const StyledContentCard = styled(Card)`
  height: fit-content;
  padding: 40px 25px;
  margin: 55% auto 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledFooterCard = styled(Card)`
  width: 100%;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function Detail() {
  const params = useParams()
  const [ offer, setOffer ] = React.useState({})
  const { theme } = useTheme()

  React.useEffect(() => {
    fetchOffer(params.offerId)
    .then((offer) => {
      setOffer(offer)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  const redirect = () => {
    console.log("this should take you to the company webpage")
  }

  return (
    <React.Fragment>
      <StyledHeaderCard>
        <StyledLogo logoURL={offer.logo}/>
        <StyledHeading3 color={theme.text.colorH3} style={{marginBottom: "8px"}}>{offer.company}</StyledHeading3>
        <StyledParagraph color={theme.text.colorParagraph}>{offer.company?.toLowerCase()}.com</StyledParagraph>
        <StyledAnchor href={offer.website} target="_blank" rel="noreferrer">
          <Button variant="secondary" style={{margin: "24px 0 0"}} onClick={redirect}>
            Company Site
          </Button>
        </StyledAnchor>
      </StyledHeaderCard>
      <StyledContentCard>
        <div style={{width: "100%", marginBottom: "50px"}}>
          <StyledParagraph color={theme.text.colorParagraph} style={{marginBottom: "8px"}}>
            {offer.postedAt} • {offer.contract}
          </StyledParagraph>
          <StyledHeading3 color={theme.text.colorH3} style={{marginBottom: "8px"}}>
            {offer.position}
          </StyledHeading3>
          <StyledHeading4 color="var(--Primary)">
            {offer.location}
          </StyledHeading4>
        </div>
        <StyledAnchor href={offer.apply} target="_blank" rel="noreferrer">
          <Button variant="primary" style={{width: "279px", marginBottom: "32px"}} onClick={redirect}>
            Apply Now
          </Button>
        </StyledAnchor>
        <StyledParagraph color={theme.text.colorParagraph} style={{marginBottom: "66px"}}>
          {offer.description}
        </StyledParagraph>
        <DetailsFragment 
          title="Requirements" 
          description={offer.requirements?.content}
          icon={BsDot}
          listItems={offer.requirements?.items}
          style={{marginBottom: "40px"}}
        />
        <DetailsFragment 
          title="What You Will Do" 
          description={offer.role?.content}
          listItems={offer.role?.items}
        />
      </StyledContentCard>
      <StyledFooterCard>
        <StyledAnchor href={offer.apply} target="_blank" rel="noreferrer">
          <Button variant="primary" style={{width: "279px"}} onClick={redirect}>
            Apply Now
          </Button>
        </StyledAnchor>
      </StyledFooterCard>
    </React.Fragment>
  )
}