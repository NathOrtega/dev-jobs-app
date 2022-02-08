import React from "react";
import { StyledHeader } from "./StyledHeader";
import { StyledLogo } from "./StyledLogo"
import ColorSampler from "./ColorSampler";
import TwoColumnsSection from "./TwoColumnsSection";
import Column from "./Column";
import { primaryColors, secondaryColors, titlesStyles, paragraphStyles } from "../constants"
import TypographySampler, { FontFamilySampler } from "./TypographySampler";
import { StyledHeading3 } from "./Typography";
import Row from "./Row";
import Button from "./Button";
import Input from "./Input";
import { FaSearch } from "react-icons/fa"
import styled from "styled-components";
import Toggle from "./Toggle"
import Checkbox from "./Checkbox";

const StyledColoredDiv = styled.div`
    width: 141px;
    height: 48px;
    border-radius: 5px;
    background-color: ${props => props.bgColor};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4px;
`

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
      <TwoColumnsSection numeration="3" title="Buttons & Form Elements">
        <Row>
          < Input 
            icon={FaSearch} 
            placeholder="Enter desired job..." 
            id="testInput" 
            style={{margin: "4px"}}
            onChange={(e) => {console.log(e)}}
          /> 
          < Button 
            variant="Primary" 
            style={{margin: "4px"}}
            onClick={() => {alert(`Primary button clicked`)}}
          >
            Primary
          </Button>
          < Button 
            variant="Secondary" 
            style={{margin: "4px"}}
            onClick={() => {alert(`Secondary button clicked`)}}
          >
            Secondary
          </Button>
          <StyledColoredDiv bgColor="var(--Violet)">
            < Toggle 
              onClick={(e) => console.log(`Is toggled: ${e}`)} 
              rightImageSrc="./resources/sun.svg" 
              rightImageStyle={{width: "20px", height: "20px"}}
              leftImageSrc="./resources/moon.svg"
              leftImageStyle={{width: "14px", height: "14px"}}
            />
          </StyledColoredDiv>
          <Checkbox label="Checkbox" onChange={(e) => {console.log(`Is active: ${e}`)}}/>
        </Row>
      </TwoColumnsSection>
    </React.Fragment>
  )
}