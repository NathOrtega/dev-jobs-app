import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { StyledHeading1, StyledHeading4 } from "../components/designSystem/Typography"
import styled, { keyframes } from "styled-components"
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { up, down } from "styled-breakpoints"
import { useBreakpoint } from "styled-breakpoints/react-styled";
import ScrollReveal from "scrollreveal";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  overflow: hidden;
  padding: 100px 50px;

  ${up("md")} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${up("md")} {
    align-items: flex-start;

    h4 {
      width: 230px;
    }
  }
`

const transformTranslate = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(15px);
  }
`

const Ghost = styled.img`
  width: 200px;
  height: auto;
  margin: 50px 0 0;
  animation: ${transformTranslate} 1.8s infinite alternate;

  ${up("md")} {
    margin: 0;
    width: 300px;
  }
`

const transformScale = keyframes`
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(.85, .85);
  }
`

const Shadow = styled.div`
  width: 100px;
  height: 24px;
  background-color: hsla(38, 21%, 19%, .16);
  margin: 0 auto;
  border-radius: 50%;
  filter: blur(7px);
  animation: ${transformScale} 1.8s infinite alternate;

  ${up("md")} {
    width: 150px;
    height: 40px;
  }
`

export default function NotFound() {
  const { theme } = useTheme()
  const isMobile = useBreakpoint(down("md"))
  const scrollreveal = ScrollReveal({
    distance: '90px',
    duration: 3000,
  })

  scrollreveal.reveal(`.description`, {origin: 'top', delay: 400})
  scrollreveal.reveal(`.image`, {origin: 'bottom', delay: 600})

  return (
    <React.Fragment>
      <Container>
        <Wrapper className="description">
          <StyledHeading4 color={theme.text.colorH1} style={{marginBottom: "10px"}}>
            Error 404
          </StyledHeading4>
          <StyledHeading1 color={theme.text.colorH1} style={{marginBottom: "10px"}}>
            Hey there
          </StyledHeading1>
          <StyledHeading4 
            color={theme.text.colorH1} 
            style={isMobile ? {marginBottom: "20px", textAlign: "center"} : {marginBottom: "20px", textAlign: "left"}}
          >
            We can't seem to find the page you are looking for.
          </StyledHeading4>
          <Link to="/">
            <Button 
              variant="primary"
            >
              Go Home
            </Button>
          </Link>
        </Wrapper>
        <Wrapper className="image">
          <Ghost 
            src="../resources/ghost.png" 
            alt="Ghost" 
          />
          <Shadow/>
        </Wrapper>
      </Container>
    </React.Fragment>
  )
}