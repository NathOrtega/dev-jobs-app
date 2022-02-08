import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  height: 136px;
  padding: 0 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-image: url(/resources/headerBgMobile.svg);
  background-size: cover;

  @media screen and (min-width:768px) {
    height: 160px;
    padding: 0 40px;
    border-bottom-left-radius: 100px;
    background-image: url(/resources/headerBgTablet.svg);
  }

  @media screen and (min-width:1024px) {
    height: 162px;
    padding: 0 165px;
    background-image: url(/resources/headerBgDesktop.svg);
  }
`