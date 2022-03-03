import React from "react";
import axios from "axios";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { SubmitButton } from "../design/AuthPage/SignUpPageStyles";
import { FlexColumnCenterBox } from "../design/CommonStyles";
function SignUpPage() {
  const [signUpInputValues, setSignUpInputValues] = React.useState({
    email: "",
    nickname: "",
    password: "",
    password2: "",
    showPassword: false,
  });

  const regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const [signUpInputStatus, setSignUpInputStatus] = React.useState({
    emailStatus: 0,
    nicknameStatus: 0,
    passwordStatus: 0,
    password2Status: 0,
  });

  const handleClickShowPassword = () => {
    setSignUpInputValues({
      ...signUpInputValues,
      showPassword: !signUpInputValues["showPassword"],
    });
  };

  const checkEmail = async (email) => {
    await axios
      .get(
        `http://elice-kdt-ai-3rd-team11.koreacentral.cloudapp.azure.com:5000/auth/register/email=${email}`
      )
      .then((res) => {
        //valid email(1)
        if (res.data.message === "Available email") {
          setSignUpInputStatus((cur) => {
            return { ...cur, emailStatus: 1 };
          });
        }
      })
      .catch(() => {
        //duplicated email(4)
        setSignUpInputStatus((cur) => {
          return { ...cur, emailStatus: 4 };
        });
      });
    // 빈 문자열 (2)
    if (email === "") {
      setSignUpInputStatus((cur) => {
        return { ...cur, emailStatus: 2 };
      });
      // 형식에 맞지 않는 이메일 (3)
    } else if (!regEmail.test(email)) {
      setSignUpInputStatus((cur) => {
        return { ...cur, emailStatus: 3 };
      });
    }
  };

  const checkNickname = async (nickname) => {
    await axios
      .get(
        `http://elice-kdt-ai-3rd-team11.koreacentral.cloudapp.azure.com:5000/auth/register/nickname=${nickname}`
      )
      .then((res) => {
        //valid nickname(1)
        if (res.data.message === "Available nickname") {
          setSignUpInputStatus((cur) => {
            return { ...cur, nicknameStatus: 1 };
          });
        }
      })
      .catch(() => {
        //duplicated nickname(4)
        setSignUpInputStatus((cur) => {
          return { ...cur, nicknameStatus: 4 };
        });
      });
    // 빈 문자열 (2)
    if (nickname === "") {
      setSignUpInputStatus((cur) => {
        return { ...cur, nicknameStatus: 2 };
      });
    }
  };

  const checkPassword = (password) => {
    // 빈 문자열 (2)
    if (password === "") {
      setSignUpInputStatus((cur) => {
        return { ...cur, passwordStatus: 2 };
      });
      // 빈 문자열이 아님 (1)
    } else if (password) {
      setSignUpInputStatus((cur) => {
        return { ...cur, passwordStatus: 1 };
      });
    }
  };

  const checkPassword2 = (password2) => {
    // 빈 문자열 (2)
    if (password2 === "") {
      setSignUpInputStatus((cur) => {
        return { ...cur, password2Status: 2 };
      });
    }
  };

  const checkIsSamePassword = (password, password2) => {
    if (password !== password2) {
      setSignUpInputStatus((cur) => {
        return { ...cur, password2Status: 3 };
      });
    } else {
      setSignUpInputStatus((cur) => {
        return { ...cur, password2Status: 1 };
      });
    }
  };
  const handleSubmitSignUp = () => {
    checkEmail(signUpInputValues["email"]).then(() =>
      console.log("email check")
    );
    checkNickname(signUpInputValues["nickname"]);
    checkIsSamePassword(
      signUpInputValues["password"],
      signUpInputValues["password2"]
    );
    if (
      Object.keys(signUpInputStatus).find((key) => signUpInputStatus[key] !== 1)
    ) {
      console.log(signUpInputValues);
      console.log(signUpInputStatus);
    } else alert("가입 성공!");
  };
  return (
    <FlexColumnCenterBox>
      <TextField
        onChange={(e) =>
          setSignUpInputValues({
            ...signUpInputValues,
            email: e.target.value,
          })
        }
        onBlur={() => {
          checkEmail(signUpInputValues["email"]);
        }}
        label="이메일"
        autoComplete="off"
        error={signUpInputStatus["emailStatus"] >= 2}
        helperText={
          signUpInputStatus["emailStatus"] < 2
            ? ""
            : signUpInputStatus["emailStatus"] === 2
            ? "필수 항목입니다"
            : signUpInputStatus["emailStatus"] === 3
            ? "이메일 형식에 맞지 않습니다"
            : "중복된 이메일입니다"
        }
      />

      <TextField
        autoComplete="off"
        onChange={(e) =>
          setSignUpInputValues({
            ...signUpInputValues,
            nickname: e.target.value,
          })
        }
        onBlur={() => {
          checkNickname(signUpInputValues["nickname"]);
        }}
        label="닉네임"
        error={signUpInputStatus["nicknameStatus"] >= 2}
        helperText={
          signUpInputStatus["nicknameStatus"] < 2
            ? ""
            : "닉네임을 입력해주세요!"
        }
        inputProps={{ maxLength: 45 }}
      />

      <TextField
        autoComplete="off"
        onChange={(e) => {
          setSignUpInputValues({
            ...signUpInputValues,
            password: e.target.value,
          });
          if (signUpInputStatus["password2Status"] > 0) {
            checkIsSamePassword(e.target.value, signUpInputValues["password2"]);
          }
        }}
        onBlur={() => checkPassword(signUpInputValues["password"])}
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
        error={signUpInputStatus["passwordStatus"] >= 2}
        helperText={
          signUpInputStatus["passwordStatus"] < 2
            ? ""
            : "비밀번호는 필수 항목입니다"
        }
      />

      <TextField
        autoComplete="off"
        onChange={(e) => {
          setSignUpInputValues({
            ...signUpInputValues,
            password2: e.target.value,
          });

          checkIsSamePassword(signUpInputValues["password"], e.target.value);
        }}
        onBlur={() => checkPassword2(signUpInputValues["password2"])}
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
        error={signUpInputStatus["password2Status"] >= 2}
        helperText={
          signUpInputStatus["password2Status"] < 2
            ? ""
            : signUpInputStatus["password2Status"] === 2
            ? "확인을 위해 비밀번호를 다시 입력해주세요"
            : "비밀번호가 일치하지 않습니다"
        }
      />

      <SubmitButton onClick={() => handleSubmitSignUp()}>확인</SubmitButton>
    </FlexColumnCenterBox>
  );
}

export default SignUpPage;
