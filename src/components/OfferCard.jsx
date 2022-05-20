import React from "react";
import styled from "styled-components";
import { useTheme } from "../contexts/ThemeContext";
import { StyledHeading3, StyledParagraph, StyledHeading4 } from "./designSystem/Typography";
import { Link } from "react-router-dom";
import { up } from "styled-breakpoints"

const Container = styled.div`
  width: 327px;
  height: 228px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.card.backgroundColor};
  padding: 49px 32px;
  margin: 0 15px 50px;
  position: relative;
  cursor: pointer;

  ${up("xl")} {
    width: 345px;
    margin: 0 28px 50px;
  }

  .logo {
    width: 50px;
    height: 50px;
    border-radius: 15px;
    background-color: var(--Neutral100);
    background-image: url(${({ logoURL }) => logoURL});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: -25px;
  }

  div {
    height: 88px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export default function OfferCard({ logo, postedAt, contract, position, company, location, id }){
  const { theme } = useTheme()

  return (
    <Container logoURL={logo}>
      <Link to={`/detail/${id}`} style={{textDecoration: "none"}}>
        <div className="logo"/>
        <div>
          <StyledParagraph color={theme.text.colorParagraph}>{postedAt} • {contract}</StyledParagraph>
          <StyledHeading3 color={theme.text.colorH3}>{position}</StyledHeading3>
          <StyledParagraph color={theme.text.colorParagraph}>{company}</StyledParagraph>
        </div>
        <StyledHeading4 color="var(--Primary)">{location}</StyledHeading4>
      </Link>
    </Container>
  )
}