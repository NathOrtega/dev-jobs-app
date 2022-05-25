import React from "react";
import { StyledParagraph, StyledHeading3 } from "./designSystem/Typography";
import styled from "styled-components"

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

export default function DetailsFragment({title, description, icon: ListIcon, listItems, style}) {
  return (
    <div style={style}>
      <StyledHeading3 style={{marginBottom: "23px"}}>
        {title}
      </StyledHeading3>
      <StyledParagraph style={{marginBottom: "32px"}}>
        {description}
      </StyledParagraph>
      {
        listItems?.map((item, index) => (
          <ListItem  key={index}>
            <span>
              {ListIcon 
                ?
                <ListIcon style={{fontSize: "25px", color: "var(--Primary)"}}/>
                :
                <StyledParagraph color="var(--Primary)" style={{marginRight: "10px", fontWeight: "bold"}}>
                  {index + 1}
                </StyledParagraph>
              }
            </span>
            <span>
              <StyledParagraph style={{marginBottom: "8px"}}>
                {item}
              </StyledParagraph>
            </span>
          </ListItem>
        ))
      }
    </div>
  )
}