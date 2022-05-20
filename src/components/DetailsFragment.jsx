import React from "react";
import { useTheme } from "../contexts/ThemeContext"
import { StyledParagraph, StyledHeading3 } from "./designSystem/Typography";
import styled from "styled-components"

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

export default function DetailsFragment({title, description, icon: ListIcon, listItems, style}) {
  const { theme } = useTheme()

  return (
    <div style={style}>
      <StyledHeading3 color={theme.text.colorH3} style={{marginBottom: "23px"}}>
        {title}
      </StyledHeading3>
      <StyledParagraph color={theme.text.colorParagraph} style={{marginBottom: "32px"}}>
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
              <StyledParagraph color={theme.text.colorParagraph} style={{marginBottom: "8px"}}>
                {item}
              </StyledParagraph>
            </span>
          </ListItem>
        ))
      }
    </div>
  )
}