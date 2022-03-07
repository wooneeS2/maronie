import React from "react";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { useState } from "react";
import {
  RecipeInput,
  CenterItem,
  AddItemStyle,
  RecipeInputStyle,
  MuiInputStyle,
  ChipIngredientsList,
  ChipIngredientDivStyle,
} from "../../design/detailPage/RecipeRegistrationStyles";
import AddCocktailPhoto from "../detailPage/widget/AddCocktailPhoto";
import {
  ColumnDiv,
  RowDiv,
  RegisterButton,
  BoldTitle,
} from "../../design/commonStyles";
import InputAdornment from "@mui/material/InputAdornment";
import { Input } from "@mui/material";
import SelectLiquorClassification from "../detailPage/widget/SelectLiquorClassification";

function RecipeRegistration({ cocktail }) {
  const [step, setStep] = useState([]);
  const addStep = () => {
    setStep(step => [...step, <RecipeInput />]);
  };

  const [ingredientsList, setIngredientsList] = useState([]);
  const [ingredient, setIngredient] = useState("");

  const addIngredients = value => {
    const newList = ingredientsList.concat(value);
    setIngredientsList(newList);
    setIngredient("");
  };
  const deleteIngredients = value => {
    const newList = ingredientsList.filter(word => word !== value);
    setIngredientsList(newList);
  };

  return (
    <>
      <ColumnDiv style={{ paddingTop: "81px" }}>
        <BoldTitle>{cocktail}</BoldTitle>
        <AddCocktailPhoto />

        <div>
          <SelectLiquorClassification />
        </div>

        <RecipeInputStyle
          id="standard-basic"
          label="칵테일 이름"
          variant="standard"
          placeholder="칵테일 이름을 입력해주세요."
        />
        <RecipeInputStyle
          id="standard-multiline-static"
          label="칵테일 소개"
          multiline
          rows={2}
          variant="standard"
        />

        <Input
          id="input-with-icon-adornment"
          sx={MuiInputStyle}
          placeholder={"재료를 입력하고  + 버튼을 눌러주세요."}
          value={ingredient}
          onChange={e => {
            setIngredient(e.target.value);
          }}
          endAdornment={
            <InputAdornment position="end">
              <AddBoxOutlinedIcon
                style={AddItemStyle}
                onClick={() => {
                  addIngredients(ingredient);
                }}
              />
            </InputAdornment>
          }
        />

        <RowDiv style={ChipIngredientDivStyle}>
          {ingredientsList.map((i, index) => (
            <span key={i + index}>
              <ChipIngredientsList
                label={i}
                onDelete={() => {
                  deleteIngredients(i);
                }}
              />
            </span>
          ))}
        </RowDiv>

        <p>레시피 1.</p>
        <RecipeInput />
        {step.map((item, i) => (
          <div key={i}>
            <p>레시피 {i + 2}.</p>
            <div>{item}</div>
          </div>
        ))}
        <CenterItem>
          <AddBoxOutlinedIcon
            style={AddItemStyle}
            onClick={() => {
              addStep();
            }}
          />
        </CenterItem>

        <CenterItem>
          <RegisterButton type="submit">등록하기</RegisterButton>
        </CenterItem>
      </ColumnDiv>
    </>
  );
}

export default RecipeRegistration;
