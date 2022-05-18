import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"

const StyledOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--Dark300);
  opacity: 0.5;
  position: absolute;
  top: 0;
`
const StyledModal = styled.div`
  width: 327px;
  height: 217px;
  background-color: ${({ theme }) => theme.card.backgroundColor};
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 6px;
`

export default function Modal({ children, isOpen, onClose }) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isOpen])

  return ReactDOM.createPortal(
    <div className={isOpen ? "" : "hidden"}>
      <StyledOverlay onClick={onClose}/>
      <StyledModal>
        {children}
      </StyledModal>
    </div>,
    document.getElementById('modal')
  )
}