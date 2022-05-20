import styled from "styled-components";
import { Link } from "react-router-dom"

export const StyledLogo = styled(Link)`
  text-decoration: none;
  color: var(--Light100);
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;

  &:visited {
    color: var(--Light100);
  }
`