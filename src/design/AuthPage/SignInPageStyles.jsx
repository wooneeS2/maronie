import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { mainOrange, mainWhite } from "design/colorPalette";

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: black;
  }
`;
export const SubmitButton = styled.button`
  border: 0;
  border-radius: 8px;
  border-style: none;
  width: 80%;
  background-color: ${mainOrange};
  margin: 13px auto;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  cursor: pointer;
  padding: 10px 16px;
  line-height: 20px;
  outline: none;
`;
export const SignUpButton = styled(SubmitButton)`
  border: 1px solid ${mainOrange};
  background-color: ${mainWhite};
`;
export const SignInInput = styled(TextField)`
  width: 80%;
`;
