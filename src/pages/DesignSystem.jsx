import React from "react";
import { StyledHeader } from "../components/StyledHeader";
import { StyledLogo } from "../components/StyledLogo"
import ColorSampler from "../components/ColorSampler";
import TwoColumnsSection from "../components/TwoColumnsSection";
import Column from "../components/Column";
import { primaryColors, secondaryColors, titlesStyles, paragraphStyles } from "../constants"
import TypographySampler, { FontFamilySampler } from "../components/TypographySampler";
import { StyledHeading3 } from "../components/Typography";
import Row from "../components/Row";
import Button from "../components/Button";
import Input from "../components/Input";
import { FaSearch } from "react-icons/fa"
import styled from "styled-components";
import Toggle from "../components/Toggle"
import Checkbox from "../components/Checkbox";
import { useTheme } from "../contexts/ThemeContext"

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
  const { setThemeName } = useTheme()

  const handleOnToggle = (e) => {
    setThemeName(e === true ? "dark" : "light")
  }

  return (
    <React.Fragment>
      <StyledHeader>
        <StyledLogo href="/"> 
          devjobs
        </StyledLogo>
        <StyledHeading3 color="var(--Light100)"> 
          Design System
        </StyledHeading3>
      </StyledHeader>
      <TwoColumnsSection numeration="1" title="Colors">
        <Column title="Primary Colors">
          {primaryColors.map(({ title, hex, rgb, hsl, cssColorConst }) => {
            return (<ColorSampler title={title} hex={hex} rgb={rgb} hsl={hsl} cssColorConst={cssColorConst} key={hex}/>)
          })}
        </Column>
        <Column title="Secondary Colors">
          {secondaryColors.map(({ title, hex, rgb, hsl, cssColorConst }) => {
            return <ColorSampler title={title} hex={hex} rgb={rgb} hsl={hsl} cssColorConst={cssColorConst} key={hex}/>
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
          <Input 
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
          <StyledColoredDiv bgColor="var(--Primary)">
            < Toggle 
              onClick={(e) => handleOnToggle(e)} 
              rightImageSrc="./resources/sun.svg" 
              rightImageStyle={{width: "20px", height: "20px"}}
              leftImageSrc="./resources/moon.svg"
              leftImageStyle={{width: "14px", height: "14px"}}
            />
          </StyledColoredDiv>
          <Checkbox label="Checkbox" onChange={(e) => {console.log(`Is checkbox active: ${e}`)}}/>
        </Row>
      </TwoColumnsSection>
    </React.Fragment>
  )
}