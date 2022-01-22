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

const StyledSectionTitle = styled.h2`
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

const StyledColumnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (min-width:768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`

export default function TwoColumnsSection({ numeration, title, introInfo,children }) {
  return (
    <StyledSection>
      <StyledSectionTitle>
        {numeration && <span>{numeration}</span>} {title}
      </StyledSectionTitle>
      {introInfo && introInfo}
      <StyledColumnsContainer>
        {children}
      </StyledColumnsContainer>
    </StyledSection>
  )
}