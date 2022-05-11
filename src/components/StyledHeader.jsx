import styled from "styled-components";

export const StyledHeader = styled.div`
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

  @media screen and (min-width:768px) {
    height: 160px;
    padding: 42px 40px;
    border-bottom-left-radius: 100px;
    background-image: url(/resources/headerBgTablet.svg);
  }

  @media screen and (min-width:1024px) {
    height: 162px;
    padding: 45px 165px;
    background-image: url(/resources/headerBgDesktop.svg);
  }
`