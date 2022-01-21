import React from "react";
import { StyledHeader } from "./StyledHeader";
import { StyledLogo } from "./StyledLogo"
import ColorSampler from "./ColorSampler";
import TwoColumnsSection from "./TwoColumnsSection";
import Column from "./Column";
import { primaryColors, secondaryColors } from "../constants"

export default function DesignSystem() {
  return (
    <React.Fragment>
      <StyledHeader>
        <StyledLogo href="/"> 
          devjobs
        </StyledLogo>
        <h1 style={{ color: "var(--White)", fontSize: "20px" }}> 
          Design System
        </h1>
      </StyledHeader>
      <TwoColumnsSection numeration={"1"} title={"Colors"}>
        <Column title={"Primary Colors"}>
          {primaryColors.map(({ title, hex, rgb, hsl, isLight }) => {
            return (<ColorSampler title={title} hex={hex} rgb={rgb} hsl={hsl} isLight={isLight} key={hex}/>)
          })}
        </Column>
        <Column title={"Secondary Colors"}>
          {secondaryColors.map(({ title, hex, rgb, hsl, isLight }) => {
            return (<ColorSampler title={title} hex={hex} rgb={rgb} hsl={hsl} isLight={isLight} key={hex}/>)
          })}
        </Column>
      </TwoColumnsSection>
    </React.Fragment>
  )
}