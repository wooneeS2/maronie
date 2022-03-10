import styled from "styled-components";
import { mainBlack, mainOrange } from "../colorPalette";

export const OpenMenu = styled.div`
  display: block;
  position: fixed;
`;

export const MenuBtn = styled.div`
  display: block;
  position: relative;
  right: 0;
  top: 30px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 10px;
  padding: 5px;
  a {
    text-decoration-line: none;
    color: ${mainBlack};

    &:hover {
      color: ${mainOrange};
    }
  }
`;

export const EachMenuBtn = styled.div`
  border-radius: 0.4rem;
  font-weight: bold;
  text-align: center;
  padding: 5px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
      rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  }

  &:hover {
    color: ${mainOrange};
  }
`;
