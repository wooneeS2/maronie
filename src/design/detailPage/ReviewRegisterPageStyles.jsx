import styled from "styled-components";
import { mainOrange } from "../colorPalette";

export const RatingTitle = styled.span`
  display: block;
  text-align: center;
  font-size: 1rem;
`;

export const ReviewContent = styled.textarea`
  width: 60%;
  padding: 1rem;
  border-radius: 1rem;
  border-color: gray;
  border-width: 3px;
  &:focus {
    border-color: ${mainOrange};
    outline: none;
  }
`;
