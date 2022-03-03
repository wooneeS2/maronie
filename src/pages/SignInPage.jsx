import React from "react";
import axios from "axios";
import { InputAdornment } from "@mui/material";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import {
  StyledLink,
  SubmitButton,
  SignInInput,
} from "../design/AuthPage/SignInPageStyles";
import { FlexColumnCenterBox } from "../design/CommonStyles";
function SignInPage() {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const handleSubmitSignIn = () => {
    axios
      .post(
        "http://elice-kdt-ai-3rd-team11.koreacentral.cloudapp.azure.com:5000/auth/login",
        {
          email,
          password,
        }
      )
      .then((res) => console.log(res))
      .catch(() => alert("누구세요...!!!!!!"));
  };
  return (
    <FlexColumnCenterBox>
      <SignInInput
        onChange={(e) => setEmail(e.target.value)}
        label="이메일"
        autoComplete="off"
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <HiOutlineMail />
            </InputAdornment>
          ),
        }}
      />

      <SignInInput
        onChange={(e) => setPassword(e.target.value)}
        label="비밀번호"
        autoComplete="off"
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <RiLockPasswordLine />
            </InputAdornment>
          ),
        }}
      />
      <SubmitButton type="submit" onClick={() => handleSubmitSignIn()}>
        Sign in
      </SubmitButton>

      <p>
        아직 회원이 아니신가요?
        <StyledLink to="/signup">회원 가입</StyledLink>
      </p>
    </FlexColumnCenterBox>
  );
}
export default SignInPage;
