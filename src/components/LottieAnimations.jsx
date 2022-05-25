import React from "react"
import lottie from "lottie-web"
import error from "../error.json"
import noResults from "../noResults.json"
import styled from "styled-components"
import { up } from "styled-breakpoints"

const Container = styled.div`
  width: 300px;
  height: 300px;

  ${up("md")}{
    width: 400px;
    height: 400px;
  }
`

export function ErrorAnimation() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#errorImage"),
      animationData: error
    });
  }, []);
  
  return (
    <Container id="errorImage"/>
  )
}

export function NoResultsAnimation() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#noResultsImage"),
      animationData: noResults
    });
  }, []);
  
  return (
    <Container id="noResultsImage"/>
  )
}