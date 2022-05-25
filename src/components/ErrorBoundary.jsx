import React from "react"
import Button from "./Button";
import { StyledHeading1 } from "./designSystem/Typography"
import { ErrorAnimation } from "./LottieAnimations";
import styled from "styled-components"
import { up } from "styled-breakpoints"

const Container = styled.div`
  width: 350px;
  height: fit-content;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${up("md")}{
    width: 450px;
  }
`

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error) {
    this.setState({
      error: error,
    })
  }
  
  render() {
    if (this.state.error) {
      return (
        <Container>
          <ErrorAnimation />
          <StyledHeading1 style={{marginBottom: "50px"}}>Something went wrong</StyledHeading1>
          <Button 
            variant="primary"
            onClick={() => window.location.reload()}
          >
            Go Home
          </Button>
        </Container>
      );
    }
    return this.props.children;
  }  
}

export default ErrorBoundary