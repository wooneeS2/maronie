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

function RecipeEdit() {
  const dummy = {
    cocktail_name: "1번 칵테일",
    image_path:
      "https://www.brit.co/media-library/quick-and-easy-cocktail-recipes.jpg?id=21488888&width=645&height=645",
    description: "개존맛입니다 다들 먹어보세용",
    ingredients: ["A", "B", "C", "D", "E", "F"],
    recipe: ["물을 담는다", "어쩌구", "냠냠"],
    level: 3,
    classification_id: 1,
  };

  const [step, setStep] = useState(dummy["recipe"]);
  const addStep = () => {
    setStep(step => [...step, <RecipeInput />]);
  };

  const [ingredientsList, setIngredientsList] = useState(dummy["ingredients"]);
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
        <BoldTitle>리큐르 이름(//TODO 수정해야댐)</BoldTitle>
        <AddCocktailPhoto />

        <div>
          <SelectLiquorClassification num={dummy["classification_id"]} />
        </div>

        <RecipeInputStyle
          id="standard-basic"
          label="칵테일 이름"
          variant="standard"
          defaultValue={dummy["cocktail_name"]}
        />
        <RecipeInputStyle
          id="standard-multiline-static"
          label="칵테일 소개"
          multiline
          rows={2}
          variant="standard"
          defaultValue={dummy["description"]}
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

        {step.map((item, idx) => (
          <>
            <p>레시피 {idx + 1}</p>
            <RecipeInput content={item} />
          </>
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

export default RecipeEdit;
