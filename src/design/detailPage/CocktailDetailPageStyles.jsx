import React from "react";
import styled from "styled-components";
import { mainYellowDark } from "../colorPalette";
import { Chip } from "@mui/material";

export const CocktailName = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

export const CocktailLevel = styled.span`
  width: 0.5rem;
  height: 0.5rem;
  color: ${mainYellowDark};
`;
export const levelStyle = {
  width: "1rem",
  height: "1rem",
  color: `${mainYellowDark}`,
};

export const ItalicTitle = styled.p`
  font-style: italic;
  color: grey;
`;

export const RecipeBox = styled.div`
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  padding: 1rem 3rem;
  border-radius: 10px;
  line-height: 1.5rem;
  margin-bottom: 1rem;
`;

export const IngredientChip = ({ value }) => {
  return <Chip label={value} variant="outlined" sx={{ marginLeft: "5px" }} />;
};
