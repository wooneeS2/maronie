import React from "react";
import styled from "styled-components";
import { mainYellowDark, mainRed } from "../colorPalette";
import { Chip } from "@mui/material";

export const CocktailName = styled.span`
  font-weight: bold;
  margin-right: 8px;
  padding: 10px;
`;

export const CocktailLevel = styled.span`
  width: 0.5rem;
  height: 0.5rem;
  color: ${mainYellowDark};
  padding: 10px;
`;
export const levelStyle = {
  width: "1.2rem",
  height: "1.2rem",
  color: `${mainRed}`,
  padding: "2px",
};

export const ItalicTitle = styled.p`
  font-style: italic;
  color: grey;
  padding: 10px;
  margin-top: 10px;
`;

export const RecipeBox = styled.div`
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;

  justify-content: center;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 2rem;
  padding: 10px;
  border-radius: 10px;
  line-height: 1.5rem;
  width: 60%;
  min-width: 300px;
`;
export const CocktailSubTitle = styled.p`
  font-weight: bold;
  padding: 10px;
  margin-top: 10px;
`;

export const CocktailContent = styled.p`
  padding: 10px;
  margin-top: 10px;
`;

export const IngredientChip = ({ value }) => {
  return <Chip label={value} variant="outlined" sx={{ marginLeft: "5px" }} />;
};
