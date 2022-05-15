import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import Input from "./Input"
import { MdLocationPin } from "react-icons/md"
import Checkbox from "./Checkbox"
import Button from "./Button"

const StyledOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--Dark300);
  opacity: 0.5;
  position: absolute;
  top: 0;
`
const StyledModel = styled.div`
  width: 327px;
  height: 217px;
  background-color: ${({ theme }) => theme.card.backgroundColor};
  position: absolute;
  top: 35%;
  left: 30px;
  border-radius: 6px;
`
const inputStyles = {
  borderBottom: "1px solid rgba(100, 128, 152, .3)",
  borderTopLeftRadius: "6",
  borderTopRightRadius: "6",
  borderBottomLeftRadius: "0",
  borderBottomRightRadius: "0",
  marginBottom: "12px",
}

const buttonStyles = {
  width: "279px",
  margin: "0 24px 24px",
}

export default function Modal({ isOpen, onClose, onSearch }) {
  const [ locationInput, setLocationInput ] = React.useState("")
  const [ isFulltime, setIsFulltime ] = React.useState(false)

  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isOpen])

  const handleOnCheckboxChange = () => {
    setIsFulltime((prevValue) => prevValue === false ? true : false)
  }

  const handleOnClick = () => {
    setLocationInput("")
    setIsFulltime(false)
    onClose()
    onSearch({locationInput, isFulltime})
  }

  return ReactDOM.createPortal(
    <div className={isOpen ? "" : "hidden"}>
      <StyledOverlay onClick={handleOnClick}/>
      <StyledModel>
        <Input 
          icon={MdLocationPin} 
          width="100%"
          placeholder="Filter by location…" 
          style={inputStyles}
          value={locationInput}
          onChange={(e) => setLocationInput(e)}
        />
        <Checkbox 
          label="Full Time Only" 
          style={{width: "fit-content", margin: "0 24px 12px"}}
          isSelected={isFulltime}
          onChange={handleOnCheckboxChange} 
        />
        <Button 
          onClick={() => onSearch({locationInput, isFulltime})}
          variant="primary"
          style={buttonStyles}
        >
          Search
        </Button>
      </StyledModel>
    </div>,
    document.getElementById('modal')
  )
}