import React from "react";
import { StyledHeading1, StyledHeading2, StyledHeading3, StyledHeading4, StyledParagraph } from "./Typography";
import styled from "styled-components";
import { useTheme } from "../../contexts/ThemeContext";
import { up } from "styled-breakpoints"

const StyledFontFamilySampler = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom: 40px;

  ${up("md")} {
    flex-direction: row;
  }
`

const StyledFontFamilyName = styled.h2`
  width: 300px;
  font-size: 40px;
  color: ${({theme}) => theme.text.colorH2};
  margin-bottom: 10px;
`

const StyledFontFamilySample = styled.p`
  max-width: 300px;
  font-size: 20px;
  color: ${({theme}) => theme.text.colorParagraph};
`

export default function TypographySampler({ type, fontSize, lineHeight, sampleText }) {
  const { themeName, theme } = useTheme()
  const typographyType = type.toLowerCase()
  let styledSampleText

  switch (typographyType) {
    case "h1":
      styledSampleText = <StyledHeading1 
        color={themeName === "dark" 
          ? theme.text.colorParagraph 
          : theme.text.colorH1}
        >
          {sampleText}
        </StyledHeading1>
    break;
    case "h2":
      styledSampleText = <StyledHeading2 
        color={themeName === "dark" 
          ? theme.text.colorParagraph 
          : theme.text.colorH1}
        >
          {sampleText}
        </StyledHeading2>
    break;
    case "h3":
      styledSampleText = <StyledHeading3 
        color={themeName === "dark" 
          ? theme.text.colorParagraph 
          : theme.text.colorH1}
        >
          {sampleText}
        </StyledHeading3>
    break;
    case "h4":
      styledSampleText = <StyledHeading4 
        color={themeName === "dark" 
          ? theme.text.colorParagraph 
          : theme.text.colorH1}
        >
          {sampleText}
        </StyledHeading4>
    break;
    default:
      styledSampleText = <StyledParagraph 
        fontWeight="Normal" 
        color={themeName === "dark" 
          ? theme.text.colorParagraph 
          : theme.text.colorH1}
        >
          {sampleText}
        </StyledParagraph>
  }

  return (
    <div style={{maxWidth: "300px", marginTop: "30px"}}>
      <StyledParagraph color={theme.text.colorParagraph}>
        {type !== "P" && type + " - "}{fontSize} - {lineHeight} line
      </StyledParagraph>
      {styledSampleText}
    </div>
  )
}

export function FontFamilySampler({ fontFamily }) {
  return (
    <StyledFontFamilySampler>
      <StyledFontFamilyName>{fontFamily}</StyledFontFamilyName>
      <StyledFontFamilySample>
        <b>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</b> {"A B C D E F G H I J K L M N O P Q R S T U V W X Y Z !@#$%^&*()"}
      </StyledFontFamilySample>
    </StyledFontFamilySampler>
  )
}