import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { SubmitButton } from "../design/AuthPage/SignUpPageStyles";
function SignUpPage() {
  const [signUpInputValues, setSignUpInputValues] = React.useState({
    email: "",
    nickname: "",
    password: "",
    password2: "",
    showPassword: false,
  });
  // regex.test
  const regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  // 회원가입 input 조건 만족하는지 저장
  // 초기화 값 0 (Input 클릭하지 않음)
  // 클릭했었지만 빈칸으로 냅뒀을때 null
  // 형식이 안맞을때 false
  // 형식이 완벽할때 true
  const [signUpInputCondition, setSignUpInputCondition] = React.useState({
    email: 0,
    nickname: 0,
    password: 0,
  });
  const handleSubmitSignUp = () => {};
  const handleClickShowPassword = () => {
    setSignUpInputValues({
      ...signUpInputValues,
      showPassword: !signUpInputValues["showPassword"],
    });
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "10px",
        }}
      >
        <TextField
          onChange={(e) =>
            setSignUpInputValues({
              ...signUpInputValues,
              email: e.target.value,
            })
          }
          onBlur={() => {
            let temp = false;
            if (signUpInputValues["email"] === "") {
              temp = null;
            } else if (regEmail.test(signUpInputValues["email"])) {
              temp = true;
            }
            setSignUpInputCondition({
              ...signUpInputCondition,
              email: temp,
            });
          }}
          label="이메일"
          error={
            signUpInputCondition["email"] === null ||
            signUpInputCondition["email"] === false
          }
          helperText={
            signUpInputCondition["email"] || signUpInputCondition["email"] === 0
              ? ""
              : signUpInputCondition["email"] === null
              ? "필수 항목입니다"
              : "사용할 수 없는 이메일입니다"
          }
        />

        <TextField
          onChange={(e) =>
            setSignUpInputValues({
              ...signUpInputValues,
              nickname: e.target.value,
            })
          }
          label="닉네임"
          error={signUpInputValues["nickname"] === ""}
          helperText={
            signUpInputValues["nickname"] === ""
              ? "이미 사용중인 닉네임입니다"
              : " "
          }
        />

        <TextField
          onChange={(e) =>
            setSignUpInputValues({
              ...signUpInputValues,
              password: e.target.value,
            })
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {signUpInputValues["showPassword"] ? (
                    <MdVisibility />
                  ) : (
                    <MdVisibilityOff />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          type={signUpInputValues["showPassword"] ? "text" : "password"}
          label="비밀번호"
          error={signUpInputValues["password"] === ""}
          helperText={
            signUpInputValues["password"] === ""
              ? "비밀번호 형식이 맞지 않습니다"
              : " "
          }
        />

        <TextField
          onChange={(e) =>
            setSignUpInputValues({
              ...signUpInputValues,
              password2: e.target.value,
            })
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {signUpInputValues["showPassword"] ? (
                    <MdVisibility />
                  ) : (
                    <MdVisibilityOff />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          type={signUpInputValues["showPassword"] ? "text" : "password"}
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

        <SubmitButton
          onClick={() => alert("clicked")}
          disabled={Object.keys(signUpInputValues).find(
            (item) => signUpInputValues[item]
          )}
        >
          확인
        </SubmitButton>
      </div>
    </>
  );
}

export default SignUpPage;
