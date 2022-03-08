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
export const BothSideLineText = styled.p`
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.35);
  font-size: 14px;
  margin: 8px 0px;
  &:before,
  &:after {
    background-color: rgba(0, 0, 0, 0.35);
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
  }
  &:before {
    right: 0.5em;
    margin-left: -50%;
  }
  &:after {
    left: 0.5em;
    margin-right: -50%;
  }
`;
export const ItemsContainer = styled.div`
  margin: 25px 0;
  display: flex;
  flex-direction: column;
  justify-items: center;
`;
