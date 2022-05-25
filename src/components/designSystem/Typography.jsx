import styled from "styled-components";

// Headings

export const StyledHeading1 = styled.h1`
  font-size: 28px;
  line-height: 34px;
  font-weight: bold;
  color: ${({color, theme}) => color ? color : theme.text.colorH1}
`

export const StyledHeading2 = styled.h2`
  font-size: 24px;
  line-height: 29px;
  font-weight: bold;
  color: ${({color, theme}) => color ? color : theme.text.colorH2}
`

export const StyledHeading3 = styled.h3`
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
  color: ${({color, theme}) => color ? color : theme.text.colorH3}
`

export const StyledHeading4 = styled.h4`
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
  color: ${({color, theme}) => color ? color : theme.text.colorH4}
`

// Body

export const StyledParagraph = styled.p`
  font-size: 16px;
  line-height: 26px;
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : "Lighter"};
  color: ${({color, theme}) => color ? color : theme.text.colorParagraph}
`