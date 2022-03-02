import React from "react";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import { TextField, Chip } from "@mui/material";
import { mainOrange, mainRed } from "../colorPalette";
import { RowDiv } from "../commonStyles";

export const RecipeInputStyle = muiStyled(TextField)({
  width: "60%",
  margin: "0 auto",
  padding: "10px",
});

export const RecipeInput = () => {
  return (
    <RecipeInputStyle
      id="filled-multiline-static"
      label=""
      multiline
      rows={4}
      variant="filled"
      placeholder="레시피를 입력해주세요."
    />
  );
};

export const CloseIcon = styled.span`
  margin-left: 10px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.5rem;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`;

export const AddPhotoStyle = {
  width: "472px",
  height: "350px",
  backgroundColor: "#CFCACA",
  cursor: "pointer",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  margin: "0 auto",
};

export const AddPhotoIconStyle = {
  fontSize: "2rem",
  margin: "0 auto",
};

export const CenterItem = styled.div`
  margin: 0 auto;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const AddItemStyle = {
  fontSize: "2rem",
  fontWeight: "bold",
  marginLeft: "0.5rem",
  color: `${mainOrange}`,
};

export const MuiInputStyle = {
  width: "60%",
  margin: "0 auto",
  marginTop: "1rem",
};

export const ChipIngredientStyle = {
  marginLeft: "5px",
  marginTop: "0.5rem",
};

export const ChipIngredientDivStyle = {
  flexWrap: "wrap",
  maxWidth: "75%",
  margin: "0 auto",
  zIndex: "100px",
  cursor: "pointer",
  padding: "5px",
};

export const ChipIngredientsList = ({ label, onDelete }) => {
  return (
    <Chip
      label={label}
      variant="outlined"
      sx={ChipIngredientStyle}
      onDelete={onDelete}
    />
  );
};

export const CloseIconhWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;
