import React from "react";
import styled from "styled-components";
import { up } from "styled-breakpoints"

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;

  ${up("md")} {
    padding: 30px 40px;
  }

  ${up("xl")} {
    padding: 30px 165px;
  }
`

const StyledSectionTitle = styled.h2`
  font-size: 28px;
  font-weight: lighter;
  color: ${({theme}) => theme.text.colorH2};
  margin-bottom: 40px;
  
  span {
    font-weight: bold;
    color: var(--Primary);
    margin-right: 20px;
  }
`

const StyledColumnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  ${up("md")} {
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