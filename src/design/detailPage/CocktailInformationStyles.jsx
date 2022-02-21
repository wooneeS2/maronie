import styled from "styled-components";
import { mainRed } from "../colorPalette";

export const CocktailImg = styled.img`
  width: 300px;
  height: 300px;
  margin: 1rem;
`;

export const CocktailSliderContainer = styled.div`
  width: 300px;
  overflow: hidden;
  display: flex;
  margin: 0 auto;
  margin-bottom: 1rem;
`;
export const CocktailNextButton = styled.button`
  background-color: transparent;
  font-size: 1.5rem;
  border: 0;
  outline: 0;
  &:hover {
    transition: all 0.3s ease-in-out;
    color: ${mainRed};
  }
`;
export const SliderContainer = styled.div`
  max-width: 300px;
  display: flex;
`;

export default CocktailImg;
