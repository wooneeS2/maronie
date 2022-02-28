import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
export const SubmitButton = styled.button`
  border: 0;
  border-radius: 10px;
  width: 90%;
  background-color: pink;
  margin: 10px auto;
  box-sizing: content-box;
  cursor: pointer;
  padding: 6px 8px;
`;
