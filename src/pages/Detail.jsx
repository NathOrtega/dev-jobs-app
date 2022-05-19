import React from "react";
import { useParams } from "react-router-dom";
import { fetchOffer } from "../api";
import { StyledHeader } from "../components/StyledHeader";
import { StyledLogo } from "../components/StyledLogo"

export default function Detail() {
  const params = useParams()
  const [ offer, setOffer ] = React.useState({})

  React.useEffect(() => {
    fetchOffer(params.offerId)
    .then((offer) => {
      setOffer(offer)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <React.Fragment>
      <StyledHeader>
        <StyledLogo href="/"> 
          devjobs
        </StyledLogo>
        <h1 style={{ color: "var(--Light100)", fontSize: "20px" }}> 
          Component
        </h1>
      </StyledHeader>
      <h1>{offer.company}</h1>
    </React.Fragment>
  )
}