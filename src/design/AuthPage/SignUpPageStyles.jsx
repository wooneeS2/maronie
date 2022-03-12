import styled from "styled-components";
import { TextField } from "@mui/material";
import { mainOrange } from "design/colorPalette";
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
export const SignUpInput = styled(TextField)`
  width: 80%;
`;
