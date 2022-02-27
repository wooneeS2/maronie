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
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "50%",
          margin: "0 auto",
          marginTop: "2rem",
        }}
      >
        <p>레시피 추가하기</p>
        {/* TODO 이미지 프리뷰 추가하기 */}
        <p>사진 추가하기</p>

        <input type="file" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "50%",
          margin: "0 auto",
        }}
      >
        <p>술 이름</p>

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
