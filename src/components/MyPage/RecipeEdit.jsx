import React from "react";
import axios from "axios";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
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
import { Input, InputAdornment } from "@mui/material";
import SelectLiquorClassification from "../detailPage/widget/SelectLiquorClassification";
const liquorClassification = [
  "진",
  "럼",
  "위스키",
  "보드카",
  "테킬라",
  "리큐르",
  "기타",
];

function RecipeEdit({ cocktailId }) {
  const [cocktailInfo, setCocktailInfo] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(null);
  const [step, setStep] = React.useState(cocktailInfo["cocktail_name"] || []);
  const addStep = () => {
    setStep(step => [...step, <RecipeInput />]);
  };

  const [ingredientsList, setIngredientsList] = React.useState(
    cocktailInfo["ingredients"] || []
  );
  const [ingredient, setIngredient] = React.useState("");

  const addIngredients = value => {
    const newList = ingredientsList.concat(value);
    setIngredientsList(newList);
    setIngredient("");
  };
  const deleteIngredients = value => {
    const newList = ingredientsList.filter(word => word !== value);
    setIngredientsList(newList);
  };

  React.useEffect(() => {
    const call = async () => {
      try {
        setIsLoading(true);
      } catch (e) {
        console.log(e);
      }
      const response = await axios
        .get(process.env.REACT_APP_DB_HOST + `cocktail/${cocktailId}`)
        .then(res => res.data);
      setCocktailInfo(response);
    };
    setIsLoading(false);
    call();
  }, []);
  return (
    <>
      <ColumnDiv style={{ paddingTop: "81px" }}>
        <BoldTitle>
          {liquorClassification[cocktailInfo["classification_id"]]}
        </BoldTitle>
        <AddCocktailPhoto />

        <div>
          <SelectLiquorClassification num={cocktailInfo["classification_id"]} />
        </div>

        <RecipeInputStyle
          id="standard-basic"
          label="칵테일 이름"
          variant="standard"
          defaultValue={cocktailInfo["cocktail_name"]}
        />
        <RecipeInputStyle
          id="standard-multiline-static"
          label="칵테일 소개"
          multiline
          rows={2}
          variant="standard"
          defaultValue={cocktailInfo["description"]}
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
          {cocktailInfo["ingredients"]?.map((i, index) => (
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

        {cocktailInfo["recipe"]?.map((item, idx) => (
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
