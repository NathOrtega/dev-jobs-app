import React from "react";
import { useParams } from "react-router-dom";
import { fetchOffer } from "../api";

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
      <h1>{offer.company}</h1>
    </React.Fragment>
  )
}