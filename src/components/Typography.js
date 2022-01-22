import styled from "styled-components";

// Headings

export const StyledHeading1 = styled.h1`
  font-size: 28px;
  line-height: 34px;
  font-weight: bold;
  color: ${(props) => props.color ? props.color : "var(--VeryDarkBlue)"}
`

export const StyledHeading2 = styled.h2`
  font-size: 24px;
  line-height: 29px;
  font-weight: bold;
  color: ${(props) => props.color ? props.color : "var(--VeryDarkBlue)"}
`

export const StyledHeading3 = styled.h3`
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
  color: ${(props) => props.color ? props.color : "var(--VeryDarkBlue)"}
`

export const StyledHeading4 = styled.h4`
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
  color: ${(props) => props.color ? props.color : "var(--VeryDarkBlue)"}
`

// Body

export const StyledParagraph = styled.p`
  font-size: 16px;
  line-height: 26px;
  font-weight: ${(props) => props.fontWeight ? props.fontWeight : "Lighter"};
  color: ${(props) => props.color ? props.color : "var(--VeryDarkBlue)"}
`