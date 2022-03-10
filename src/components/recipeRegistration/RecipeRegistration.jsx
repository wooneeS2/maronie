import React from "react";
import { useState } from "react";
import axios from "axios";
import {
  CenterItem,
  AddItemStyle,
  RecipeInputStyle,
  MuiInputStyle,
  ChipIngredientsList,
  ChipIngredientDivStyle,
} from "../../design/detailPage/RecipeRegistrationStyles";
import AddCocktailPhoto from "../detailPage/widget/AddCocktailPhoto";
import { ColumnDiv, RowDiv, RegisterButton } from "../../design/commonStyles";
import InputAdornment from "@mui/material/InputAdornment";
import { Input } from "@mui/material";
import SelectLiquorClassification from "../detailPage/widget/SelectLiquorClassification";
import Slider from "@mui/material/Slider";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { useNavigate } from "react-router-dom";

const marks = [
  {
    value: 1,
    label: "쉬움",
  },
  {
    value: 2,
    label: "보통",
  },
  {
    value: 3,
    label: "어려움",
  },
];

const url = process.env.REACT_APP_DB_HOST;

function RecipeRegistration({ userId }) {
  const [step, setStep] = useState([]);
  const addStep = () => {
    setStep(step => [
      ...step,
      <RecipeInputStyle
        id="filled-multiline-static"
        label=""
        multiline
        rows={3}
        variant="filled"
        placeholder="레시피를 입력해주세요."
        onChange={e => {
          setCocktailStep(e.target.value);
        }}
      />,
    ]);
  };

  const [ingredientsList, setIngredientsList] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [cocktailClassification, setCocktailClassification] = useState(0);
  const [cocktailImage, setCocktailImage] = useState("");
  const [cocktailStep, setCocktailStep] = useState("");
  const [cockatailStepList, setCocktailStepList] = useState([]);
  const [cocktailInfo, setCocktailInfo] = useState({
    cocktail_name_kor: "",
    cocktail_name: "",
    classification_id: 0,
    level: 0,
    alcohol: 0,
    description: "",
  });
  let formData = new FormData();
  const navigate = useNavigate();

  const setRecipe = (value, category) => {
    setCocktailInfo(current => {
      const temp = { ...current };
      temp[category] = value;
      return temp;
    });
  };

  const setClassification = level => {
    setCocktailClassification(level);
  };

  const setImage = image => {
    setCocktailImage(image);
  };

  const addIngredients = value => {
    const newList = ingredientsList.concat(value);
    setIngredientsList(newList);
    setIngredient("");
  };
  const deleteIngredients = value => {
    const newList = ingredientsList.filter(word => word !== value);
    setIngredientsList(newList);
  };

  const createFormData = () => {
    formData.append("file", cocktailImage);
    formData.append("author_id", userId);
    formData.append("cocktail_name", cocktailInfo.cocktail_name);
    formData.append("cocktail_name_kor", cocktailInfo.cocktail_name_kor);
    formData.append("classification_id", cocktailInfo.classification_id);
    formData.append("level", cocktailInfo.level);
    formData.append("description", cocktailInfo.description);
    formData.append("ingredients", ingredientsList.join("\\n"));
    formData.append("recipe", cockatailStepList.join("\\n"));
  };

  return (
    <>
      <ColumnDiv style={{ paddingTop: "81px" }}>
        <AddCocktailPhoto passImage={img => setImage(img)} />
        <div
          style={{
            width: "50%",
            maxWidth: "450px",
            margin: "0 auto",
            padding: "20px",
          }}
        >
          <label htmlFor="cocktailLevel">칵테일 제조 난이도</label>
          <Slider
            id="cocktailLevel"
            aria-label="Small steps"
            defaultValue={1}
            step={1}
            min={1}
            max={3}
            marks={marks}
            onChange={(e, value) => {
              setRecipe(value, "level");
            }}
          />
        </div>
        <div>
          <SelectLiquorClassification
            passLevel={level => setClassification(level)}
          />
        </div>

        <RecipeInputStyle
          id="standard-basic"
          label="칵테일 이름"
          variant="standard"
          placeholder="칵테일 이름을 입력해주세요."
          onChange={e => {
            setRecipe(e.target.value, "cocktail_name_kor");
            setRecipe(cocktailClassification, "classification_id");
          }}
        />
        <RecipeInputStyle
          id="standard-basic"
          label="칵테일 영어 이름(선택)"
          variant="standard"
          placeholder="영어 이름을 입력해주세요."
          onChange={e => {
            setRecipe(e.target.value, "cocktail_name");
          }}
        />
        <RecipeInputStyle
          id="standard-basic"
          label="칵테일 도수(선택)"
          variant="standard"
          placeholder="숫자만 입력해주세요."
          type="number"
          onChange={e => {
            setRecipe(e.target.value, "alcohol");
          }}
        />

        <RecipeInputStyle
          id="standard-multiline-static"
          label="칵테일 소개"
          multiline
          rows={2}
          variant="standard"
          onChange={e => {
            setRecipe(e.target.value, "description");
            console.log(cocktailInfo);
          }}
        />

        <Input
          id="input-with-icon-adornment"
          sx={MuiInputStyle}
          placeholder={"재료를 입력하고 + 버튼을 눌러주세요."}
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
        <RecipeInputStyle
          id="filled-multiline-static"
          label=""
          multiline
          rows={3}
          variant="filled"
          placeholder="레시피를 입력해주세요."
          onChange={e => {
            setCocktailStep(e.target.value);
          }}
        />
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
              setCocktailStepList([...cockatailStepList, cocktailStep]);
            }}
          />
        </CenterItem>

        <CenterItem>
          <RegisterButton
            type="submit"
            onClick={async () => {
              setCocktailStepList([...cockatailStepList, cocktailStep]);
              createFormData();

              try {
                const patch = await axios.post(
                  `${url}cocktail/recipe/create`,
                  formData,
                  {
                    headers: {
                      "Content-Type": "multipart/form-data",
                    },
                  }
                );
                if (patch.status === 201) {
                  window.alert("레시피 작성이 완료되었습니다.");
                  navigate(-1);
                }
              } catch (error) {
                window.alert("레시피 작성을 실패했습니다.");
                console.log(error);
              }
            }}
          >
            등록하기
          </RegisterButton>
        </CenterItem>
      </ColumnDiv>
    </>
  );
}

export default RecipeRegistration;
