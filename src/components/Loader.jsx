import React from "react"
import styled from "styled-components"
import  { Loader as LottieLoader, LoadingText } from "../components/LottieAnimations"

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function Loader() {
  return (
    <Container>
      <LottieLoader />
      <LoadingText />
    </Container>
  )
}