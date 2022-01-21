import React from "react";
import { StyledHeader } from "./StyledHeader";
import { StyledLogo } from "./StyledLogo"

export default function Detail() {
  return (
    <React.Fragment>
      <StyledHeader>
        <StyledLogo href="/"> 
          devjobs
        </StyledLogo>
        <h1 style={{ color: "var(--White)", fontSize: "20px" }}> 
          Component
        </h1>
      </StyledHeader>
      <h1>Detail</h1>
    </React.Fragment>
  )
}