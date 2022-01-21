import React from "react";
import styled from "styled-components";

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;

  @media screen and (min-width:768px) {
    padding: 30px 40px;
  }

  @media screen and (min-width:1024px) {
    padding: 30px 165px;
  }
`

const StyledColumnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width:768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`

const StyledSectionTitle = styled.h1`
  font-size: 28px;
  font-weight: lighter;
  color: var(--VeryDarkBlue);
  margin-bottom: 40px;
  
  span {
    font-weight: bold;
    color: var(--Violet);
    margin-right: 20px;
  }
`

export default function TwoColumnsSection({ numeration, title, children }) {
  return (
    <StyledSection>
      <StyledSectionTitle>
        {numeration && <span>{numeration}</span>} {title}
      </StyledSectionTitle>
      <StyledColumnsContainer>
        {children}
      </StyledColumnsContainer>
    </StyledSection>
  )
}