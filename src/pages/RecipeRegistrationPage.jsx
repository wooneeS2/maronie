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
} from "../design/detailPage/RecipeRegistrationStyles";
import AddCocktailPhoto from "../components/detailPage/AddCocktailPhoto";
import {
  ColumnDiv,
  RowDiv,
  RegisterButton,
  PageTitle,
  BoldTitle,
} from "../design/commonStyles";
import InputAdornment from "@mui/material/InputAdornment";
import { Input } from "@mui/material";

function RecipeRegistrationPage() {
  const [step, setStep] = useState([]);
  const addStep = () => {
    setStep(students => [...step, <RecipeInput />]);
  };

  const [ingredientsList, setIngredientsList] = useState([]);
  const [ingredient, setIngredient] = useState("");

  const addIngredients = value => {
    setIngredientsList([...ingredientsList, value]);
  };
  const deleteIngredients = value => {
    const newList = ingredientsList.filter(word => word !== value);
    setIngredientsList(newList);
  };

  return (
    <>
      <ColumnDiv>
        <PageTitle>레시피 추가하기</PageTitle>
        <BoldTitle>술 이름</BoldTitle>
        <AddCocktailPhoto />

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
          onChange={e => {
            setIngredient(e.target.value);
          }}
          endAdornment={
            <InputAdornment position="end">
              <AddBoxOutlinedIcon
                style={AddItemStyle}
                onClick={e => {
                  e.preventDefault();
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

export default RecipeRegistrationPage;
