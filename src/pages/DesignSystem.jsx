import React from "react";
import ColorSampler from "../components/designSystem/ColorSampler";
import TwoColumnsSection from "../components/designSystem/TwoColumnsSection";
import Column from "../components/designSystem/Column";
import { primaryColors, secondaryColors, titlesStyles, paragraphStyles } from "../constants"
import TypographySampler, { FontFamilySampler } from "../components/designSystem/TypographySampler";
import Row from "../components/designSystem/Row";
import Button from "../components/Button";
import Input from "../components/Input";
import { FaSearch } from "react-icons/fa"
import styled from "styled-components";
import ToggleTheme from "../components/ToggleTheme"
import Checkbox from "../components/Checkbox";
import { up } from "styled-breakpoints"
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

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

const StyledBox = styled.div`
  ${up("md")} {
    width: 300px;
    height: 100px;
  }
`

export default function DesignSystem() {
  const { type, fontSize, lineHeight, sampleText } = paragraphStyles
  const [ ischecked, setIsChecked ] = React.useState(false)
  const [ shouldThrowError, setShouldThrowError ] = React.useState(false)
  const [ isLoading, setIsLoading ] = React.useState(false)

  const handleOnCheckboxChange = () => {
    setIsChecked((prevState) => prevState === true ? false : true)
  }

  const throwError = () => {
    setShouldThrowError(true)
  }

  React.useEffect(() => {
    if(ischecked) {
      console.log("Checked!")
    } else {
      console.log("Unchecked!")
    }
  }, [ischecked])

  React.useEffect(() => {
    if(shouldThrowError){
      throw new Error()
    }
  }, [shouldThrowError])

  if(isLoading) {
    return <Loader />
  }

  return (
    <React.Fragment>
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
          <Row title="Input">
            <StyledBox>
              <Input 
                icon={FaSearch} 
                placeholder="Enter desired job..." 
                id="testInput" 
                style={{margin: "4px"}}
                onChange={(e) => {console.log(e)}}
              /> 
            </StyledBox>
          </Row>
          <Row title="Buttons">
            <StyledBox>
              <Button 
                variant="Primary" 
                style={{margin: "4px"}}
                onClick={() => {alert(`Primary button clicked`)}}
              >
                Primary
              </Button>
              <Button 
                variant="Secondary" 
                style={{margin: "4px"}}
                onClick={() => {alert(`Secondary button clicked`)}}
              >
                Secondary
              </Button>
            </StyledBox>
          </Row>
        </Row>
        <Column>
          <Row title="Toggle">
            <StyledBox>
              <StyledColoredDiv bgColor="var(--Primary)">
                < ToggleTheme />
              </StyledColoredDiv>
            </StyledBox>
          </Row>
          <Row title="Checkbox">
            <StyledBox>
              <Checkbox label="Test1" isSelected={ischecked} onChange={handleOnCheckboxChange}/>
            </StyledBox>
          </Row>
        </Column>
      </TwoColumnsSection>
      <TwoColumnsSection numeration="4" title="Errors & Loader">
        <Row title="General error">
          <Button
          variant="primary"
          onClick={throwError}
          >
            Error
          </Button>
        </Row>
        <Row title="404 error">
          <Link to="/url-that-does-not-exist">
            <Button
              variant="primary"
              >
                404
            </Button>
          </Link>
        </Row>
        <Row title="Loading">
          <Button
            variant="primary"
            onClick={() => setIsLoading(true)}
            >
              Loading
          </Button>
        </Row>
      </TwoColumnsSection>
    </React.Fragment>
  )
}