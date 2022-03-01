import React from "react";
import { TextField, Chip } from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { BsTrash } from "react-icons/bs";
import { MdAddAPhoto } from "react-icons/md";
import { mainRed, mainYellowDark } from "../design/colorPalette";

const StyledInputText = styled(TextField)({});

const RecipeInputStyle = styled(TextField)({
  width: "100%",
});
const RecipeInput = () => {
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

function RecipeRegistrationPage() {
  const [step, setStep] = useState([]);
  const addStep = () => {
    setStep(students => [...step, <RecipeInput />]);
  };

  const [picture, setPicture] = useState(null);

  const resetPicture = e => {
    setPicture(null);
  };
  const onChangePicture = e => {
    setPicture(URL.createObjectURL(e.target.files[0]));
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "50%",
          margin: "0 auto",
          marginTop: "2rem",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
          레시피 추가하기
        </p>
        <p>술 이름</p>

        <div className="register-profile-image"></div>
        <div className="previewProfilePic">
          {picture ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <img
                className="playerProfilePic_home_tile"
                src={picture && picture}
                style={{
                  width: "200px",
                  height: "250px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              />

              <BsTrash
                style={{
                  backgroundColor: `${mainRed}`,
                  borderRadius: "100px",
                  padding: "3px",
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  resetPicture();
                }}
              />
            </div>
          ) : (
            <div style={{ marginBottom: "2rem" }}>
              <label htmlFor="cocktailPhoto">
                <div
                  style={{
                    width: "200px",
                    height: "250px",
                    backgroundColor: "#CFCACA",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    margin: "0 auto",
                  }}
                >
                  <input
                    id="cocktailPhoto"
                    type="file"
                    accept="image/*"
                    onChange={onChangePicture}
                    style={{ display: "none" }}
                  />

                  <MdAddAPhoto
                    style={{
                      fontSize: "2rem",
                      zIndex: "100",
                      margin: "0 auto",
                    }}
                  />
                </div>
              </label>
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "50%",
          margin: "0 auto",
        }}
      >
        <TextField
          id="standard-basic"
          label="칵테일 이름"
          variant="standard"
          placeholder="칵테일 이름을 입력해주세요."
        />
        <StyledInputText
          id="standard-multiline-static"
          label="칵테일 소개"
          multiline
          rows={2}
          variant="standard"
        />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <TextField
            id="ingredients-input"
            label="재료"
            variant="standard"
            placeholder="재료를 입력하고 + 버튼을 눌러주세요."
            sx={{
              marginTop: "10px ",
              marginBottom: "10px",
              minWidth: "80%",
            }}
            onChange={e => {
              setIngredient(e.target.value);
            }}
          />

          <AddBoxOutlinedIcon
            color="orange"
            sx={{ fontSize: "2rem" }}
            onClick={e => {
              e.preventDefault();
              addIngredients(ingredient);
              setIngredient("");
            }}
          />
        </div>

        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {/* TODO 동기처리하기 */}
          {ingredientsList.map((i, index) => (
            <Chip
              key={i + index}
              label={i}
              variant="outlined"
              sx={{ marginLeft: "5px" }}
              onDelete={() => {
                deleteIngredients(i);
              }}
            />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "0 auto",
            marginTop: "1rem",
          }}
        >
          <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            레시피 등록하기
          </span>
        </div>
        <p>레시피 1.</p>
        <RecipeInput />
        {step.map((item, i) => (
          <div key={i}>
            <p>레시피 {i + 2}.</p>
            <div>{item}</div>
          </div>
        ))}
        <span style={{ margin: "0 auto", marginTop: "1rem" }}>
          <AddBoxOutlinedIcon
            color="orange"
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginLeft: "0.5rem",
            }}
            onClick={() => {
              addStep();
            }}
          />
        </span>

        <button
          type="submit"
          style={{
            width: "50vw",
            maxWidth: "390px",
            padding: "10px",
            borderRadius: "100px",

            marginTop: "1rem",
            marginBottom: "1rem",
            backgroundColor: `${mainYellowDark}`,
            borderColor: "transparent",
          }}
        >
          등록하기
        </button>
      </div>
    </>
  );
}

export default RecipeRegistrationPage;
