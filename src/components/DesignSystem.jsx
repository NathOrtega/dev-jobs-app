import React from "react";
import { StyledHeader } from "./StyledHeader";
import { StyledLogo } from "./StyledLogo"
import ColorSampler from "./ColorSampler";
import TwoColumnsSection from "./TwoColumnsSection";
import Column from "./Column";
import { primaryColors, secondaryColors, titlesStyles, paragraphStyles } from "../constants"
import TypographySampler, { FontFamilySampler } from "./TypographySampler";
import { StyledHeading3 } from "./Typography";

export default function DesignSystem() {
  const { type, fontSize, lineHeight, sampleText } = paragraphStyles

  return (
    <React.Fragment>
      <StyledHeader>
        <StyledLogo href="/"> 
          devjobs
        </StyledLogo>
        <StyledHeading3 color="var(--White)"> 
          Design System
        </StyledHeading3>
      </StyledHeader>
      <TwoColumnsSection numeration="1" title="Colors">
        <Column title="Primary Colors">
          {primaryColors.map(({ title, hex, rgb, hsl, isLight }) => {
            return (<ColorSampler title={title} hex={hex} rgb={rgb} hsl={hsl} isLight={isLight} key={hex}/>)
          })}
        </Column>
        <Column title="Secondary Colors">
          {secondaryColors.map(({ title, hex, rgb, hsl, isLight }) => {
            return <ColorSampler title={title} hex={hex} rgb={rgb} hsl={hsl} isLight={isLight} key={hex}/>
          })}
        </Column>
      </TwoColumnsSection>
      <TwoColumnsSection numeration="2" title="Typography" introInfo={<FontFamilySampler fontFamily="Kumbh Sans"/>}>
          <Column title="Headings">
            {titlesStyles.map(({ type, fontSize, lineHeight, sampleText }, index) => {
              return <TypographySampler key={index} type={type} fontSize={fontSize} lineHeight={lineHeight} sampleText={sampleText} />
            })}
          </Column>
          <Column title="Body">
            <TypographySampler type={type} fontSize={fontSize} lineHeight={lineHeight} sampleText={sampleText}/>
          </Column>
      </TwoColumnsSection>
    </React.Fragment>
  )
}