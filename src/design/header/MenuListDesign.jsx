import styled from "styled-components";
import { mainBlack, mainOrange } from "../colorPalette";

export const OpenMenu = styled.div`
  display: block;
  position: fixed;
  min-width: 150px;
  z-index: -1;
  font-size: 1rem;
`;

export const MenuBtn = styled.div`
  display: block;
  position: relative;
  right: 70px;
  top: 30px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 5px;
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
  border-radius: 5px;
  text-align: center;
  padding: 5px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
      rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    background-color: white;
    font-weight: bold;
    color: ${mainOrange};
  }
  margin: 0;
`;

export const MenuIconStyle = {
  marginTop: "2px",
};
