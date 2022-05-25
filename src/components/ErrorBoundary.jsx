import React from "react"
import { StyledHeading1 } from "./designSystem/Typography"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  
  componentDidCatch(error) {
    this.setState({
      error: error,
    })
  }
  
  render() {
    if (this.state.error) {
      return (
        <div>
          <StyledHeading1>{this.props.message}</StyledHeading1 >
        </div>
      );
    }
    return this.props.children;
  }  
}

export default ErrorBoundary