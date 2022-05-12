import styled from "styled-components";
import { up } from "styled-breakpoints"

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

  ${up("md")} {
    height: 160px;
    padding: 42px 40px;
    border-bottom-left-radius: 100px;
    background-image: url(/resources/headerBgTablet.svg);
  }

  ${up("xl")} {
    height: 162px;
    padding: 45px 165px;
    background-image: url(/resources/headerBgDesktop.svg);
  }
`