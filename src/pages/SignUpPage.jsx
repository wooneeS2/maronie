import React from "react";
import axios from "axios";
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
  //중복 테스트 데이터
  const dummy = {
    email: ["a@naver.com", "b@naver.com", "c@naver.com"],
    nickname: ["a", "b", "c"],
  };
  const regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const [signUpInputStatus, setSignUpInputStatus] = React.useState({
    emailStatus: 0,
    nicknameStatus: 0,
    passwordStatus: 0,
  });

  const checkEmail = async (email) => {
    const response = await axios
      .get(
        `http://elice-kdt-ai-3rd-team11.koreacentral.cloudapp.azure.com:5000/auth/register/${email}`
      )
      .then((res) => res.data.message);
    console.log(response);
    // 빈 문자열 (1)
    if (email === "") {
      setSignUpInputStatus((cur) => {
        return { ...cur, email: 1 };
      });
      // 형식에 맞지 않는 이메일 (2)
    } else if (!regEmail.test(email)) {
      setSignUpInputStatus((cur) => {
        return { ...cur, email: 2 };
      });
      // 중복된 이메일 (3)
    } else if (response === "임시 중복 return값") {
      setSignUpInputStatus((cur) => {
        return { ...cur, email: 3 };
      });
    }
  };
  const handleSubmitSignUp = () => {
    if (signUpInputValues["email"].includes(dummy["email"])) {
      setSignUpInputStatus({
        ...signUpInputStatus,
        email: "이메일 중복",
      });
    }
    if (signUpInputValues["nickname"].includes(dummy["nickname"])) {
      setSignUpInputStatus({
        ...signUpInputStatus,
        nickname: "닉네임 중복",
      });
    }
    if (
      signUpInputStatus["email"] === "" &&
      signUpInputStatus["nickname"] === "" &&
      signUpInputStatus["password"] === ""
    ) {
      alert("가입 성공!");
    }
  };
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
            checkEmail(signUpInputValues["email"]);
            // let temp = "이메일 형식을 확인해주세요";
            // if (signUpInputValues["email"] === "") {
            //   temp = "이메일은 필수 항목입니다";
            // } else if (regEmail.test(signUpInputValues["email"])) {
            //   temp = "";
            // }
            // setSignUpInputStatus({
            //   ...signUpInputStatus,
            //   email: temp,
            // });
          }}
          label="이메일"
          error={
            signUpInputStatus["email"] === "이메일은 필수 항목입니다" ||
            signUpInputStatus["email"] === "이메일 형식을 확인해주세요"
          }
          helperText={signUpInputStatus["email"]}
        />

        <TextField
          onChange={(e) =>
            setSignUpInputValues({
              ...signUpInputValues,
              nickname: e.target.value,
            })
          }
          onBlur={() => {
            // let temp = "";
            // if (signUpInputValues["nickname"] === "") {
            //   temp = "닉네임은 필수 항목입니다";
            // }
            // setSignUpInputStatus({
            //   ...signUpInputStatus,
            //   nickname: temp,
            // });
          }}
          label="닉네임"
          error={signUpInputStatus["nickname"] === "닉네임은 필수 항목입니다"}
          helperText={signUpInputStatus["nickname"]}
        />

        <TextField
          onChange={(e) =>
            setSignUpInputValues({
              ...signUpInputValues,
              password: e.target.value,
            })
          }
          onBlur={() => {
            let temp = "";
            if (signUpInputValues["password"] === "") {
              temp = "비밀번호를 입력해주세요";
            }
            setSignUpInputStatus({
              ...signUpInputStatus,
              password: temp,
            });
          }}
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
          error={signUpInputValues["password"] === "비밀번호를 입력해주세요"}
          helperText={signUpInputStatus["password"]}
        />

        <TextField
          onChange={(e) =>
            setSignUpInputValues({
              ...signUpInputValues,
              password2: e.target.value,
            })
          }
          onBlur={() => {
            let temp = "";
            if (signUpInputValues["password2"] === "") {
              temp = "비밀번호를 한번 더 입력해주세요";
            } else if (
              signUpInputValues["password"] !== signUpInputValues["password2"]
            ) {
              temp = "비밀번호가 일치하지 않습니다";
            }
            setSignUpInputStatus({
              ...signUpInputStatus,
              password2: temp,
            });
          }}
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
            signUpInputStatus["password2"] ===
              "비밀번호를 한번 더 입력해주세요" ||
            signUpInputStatus["password2"] === "비밀번호가 일치하지 않습니다"
          }
          helperText={signUpInputStatus["password2"]}
        />

        <SubmitButton onClick={() => handleSubmitSignUp()}>확인</SubmitButton>
      </div>
    </>
  );
}

export default SignUpPage;
