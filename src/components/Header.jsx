import styled from "styled-components";
import { up } from "styled-breakpoints"
import { StyledLogo } from "./StyledLogo";
import Toggle from "./Toggle";
import { useTheme } from "../contexts/ThemeContext";
import { useLocation } from 'react-router-dom';
import { StyledHeading2 } from "./designSystem/Typography";
import { darkTheme } from "../Theme";

const StyledHeader = styled.div`
  width: 100%;
  height: 136px;
  padding: 36px 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  background-image: url(/resources/headerBgMobile.svg);
  background-size: cover;
  position: relative;

  ${up("md")} {
    height: 160px;
    padding: 42px 40px;
    border-bottom-left-radius: 100px;
    background-image: url(/resources/headerBgTablet.svg);
  }

  ${up("xl")} {
    height: 162px;
    padding: 45px 165px;
    background-image: url(/resources/headerBgDesktop.svg);
  }
`

export default function Header({logo}) {
  const { setThemeName } = useTheme()
  const location = useLocation()

  const handleOnToggle = (e) => {
    setThemeName(e === true ? "dark" : "light")
  }

  return (
    <StyledHeader>
        <StyledLogo href="/"> 
          {logo}
        </StyledLogo>
        { location.pathname === "/design-system" 
          ? 
          <StyledHeading2 color={darkTheme.text.colorH3}> 
            Design System
          </StyledHeading2>
          :
          <Toggle 
            onClick={(e) => handleOnToggle(e)} 
            rightImageSrc="../resources/sun.svg" 
            rightImageStyle={{width: "20px", height: "20px"}}
            leftImageSrc="../resources/moon.svg"
            leftImageStyle={{width: "14px", height: "14px"}}
          />
        }
      </StyledHeader>
  )
}