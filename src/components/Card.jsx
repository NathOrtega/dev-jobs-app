import React from "react";
import styled from "styled-components";
import { useTheme } from "../contexts/ThemeContext";
import { StyledHeading3, StyledParagraph, StyledHeading4 } from "./Typography";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
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

export default function Card({ logo, postedAt, contract, position, company, location }){
  const { theme } = useTheme()

  return (
    <StyledDiv logoURL={logo}>
      <Link to={"/detail"} style={{textDecoration: "none"}}>
        <div className="logo"/>
        <div>
          <StyledParagraph color={theme.text.colorParagraph}>{postedAt} • {contract}</StyledParagraph>
          <StyledHeading3 color={theme.text.colorH3}>{position}</StyledHeading3>
          <StyledParagraph color={theme.text.colorParagraph}>{company}</StyledParagraph>
        </div>
        <StyledHeading4 color="var(--Primary)">{location}</StyledHeading4>
      </Link>
    </StyledDiv>
  )
}