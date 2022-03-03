import styled from "styled-components";
import { Link } from "react-router-dom";
import { mainOrange, mainWhite, mainBlack } from "./colorPalette";

export const TableItem = styled.div`
  margin: 0 10px;
  display: flex;
  border-bottom: 1px solid gray;
`;

export const FlexColumnCenterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FlexRowCenterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const CenterBox = styled.div`
  text-align: center;
`;

export const StyledButton = styled.button`
  border: 0;
  outline: 0;
  background-color: ${mainOrange};
  color: ${mainWhite};
  border-radius: 10px;
  cursor: pointer;
  padding: 10px;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: black;
  }
`;
