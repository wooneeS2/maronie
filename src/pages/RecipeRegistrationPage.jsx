import React from "react";
import {
  Button,
  Input,
  FormControl,
  InputLabel,
  FormHelperText,
  TextField,
} from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import styled from "@emotion/styled";
import { useState } from "react";
import { IoReloadOutline } from "react-icons/io5";
import { BsTrash } from "react-icons/bs";
import { MdAddAPhoto } from "react-icons/md";
import { mainRed } from "../design/colorPalette";

const StyledInputText = styled(TextField)({});
const StyledInput = styled(Input)({
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
});

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
        <p>레시피 추가하기</p>
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
                  width: "20vw",
                  height: "300px",
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
                    height: "300px",
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
        <InputLabel htmlFor="component-helper">칵테일 이름</InputLabel>
        <StyledInput
          id="component-helper"
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">
          칵테일 이름을 입력해주세요.
        </FormHelperText>
        <StyledInputText
          id="standard-multiline-static"
          label="칵테일 소개"
          multiline
          rows={2}
          variant="standard"
        />

        <InputLabel htmlFor="component-helper">재료</InputLabel>
        <StyledInput
          id="component-helper"
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">
          재료를 입력해주세요.
        </FormHelperText>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>제조과정 등록하기</p>
          <p>
            <AddBoxOutlinedIcon
              onClick={() => {
                addStep();
              }}
            />
          </p>
        </div>
        <p>레시피 1.</p>
        <RecipeInput />
        {step.map((item, i) => (
          <div key={i}>
            <p>레시피 {i + 2}.</p>
            <div>{item}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default RecipeRegistrationPage;
