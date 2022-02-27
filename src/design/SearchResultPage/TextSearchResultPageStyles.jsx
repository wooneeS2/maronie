import styled from "styled-components";
import { Link } from "react-router-dom";
export const TextResultItemTitle = styled.h3`
  font-size: 1.3rem;
  color: black;
`;
export const TextResultItemPrice = styled.p`
  font-size: 1.1rem;
  margin: 0;
  color: gray;
`;
export const TextResultItemDescription = styled.p`
  font-size: 0.8rem;
  color: gray;
`;
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
