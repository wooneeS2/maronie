import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { SubmitButton } from "../design/AuthPage/SignUpPageStyles";
function SignUpPage() {
  const [signUpInputValues, setsignUpInputValues] = React.useState({
    email: "",
    nickname: "",
    password: "",
    password2: "",
    showPassword: false,
  });
  const regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  return (
    <>
      <p>회원가입</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "10px",
        }}
      >
        <TextField
          label="이메일"
          error={signUpInputValues["email"] === ""}
          helperText={
            signUpInputValues["email"] === ""
              ? "사용할 수 없는 이메일입니다"
              : " "
          }
        />

        <TextField
          label="닉네임"
          error={signUpInputValues["nickname"] === ""}
          helperText={
            signUpInputValues["nickname"] === ""
              ? "사용할 수 없는 닉네임입니다"
              : " "
          }
        />

        <TextField
          type="password"
          label="비밀번호"
          error={signUpInputValues["password"] === ""}
          helperText={
            signUpInputValues["password"] === ""
              ? "비밀번호 형식이 맞지 않습니다"
              : " "
          }
        />

        <TextField
          type="password"
          label="비밀번호 확인"
          error={
            signUpInputValues["password"] !== signUpInputValues["password2"]
          }
          helperText={
            signUpInputValues["password"] !== signUpInputValues["password2"]
              ? "비밀번호가 일치하지 않습니다"
              : " "
          }
        />

        <SubmitButton>다음</SubmitButton>
      </div>
    </>
  );
}

export default SignUpPage;
