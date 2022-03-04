import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  SubmitButton,
  SignInInput,
  SignUpButton,
} from "../design/AuthPage/SignInPageStyles";
import { FlexColumnCenterBox, BothSideLineText } from "../design/CommonStyles";
function SignInPage() {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const navigate = useNavigate();
  const handleSubmitSignIn = () => {
    axios
      .post(process.env.REACT_APP_DB_HOST + "/auth/login", {
        email,
        password,
      })
      .then((res) => {
        sessionStorage.setItem("userInfo", JSON.stringify(res.data));
        alert(res.data.nickname + "님! 안녕하세요 :)");
      })
      .catch((e) => {
        if (e === "User Not Found") {
          alert("아이디를 확인해주세요");
        } else {
          alert("비밀번호를 확인해주세요");
        }
      });
  };
  return (
    <FlexColumnCenterBox>
      <SignInInput
        onChange={(e) => setEmail(e.target.value)}
        label="이메일"
        autoComplete="off"
        margin="normal"
      />

      <SignInInput
        onChange={(e) => setPassword(e.target.value)}
        label="비밀번호"
        autoComplete="off"
        margin="normal"
      />
      <SubmitButton type="submit" onClick={() => handleSubmitSignIn()}>
        Sign in
      </SubmitButton>
      <BothSideLineText>마로니에가 처음이신가요?</BothSideLineText>
      <SignUpButton onClick={() => navigate("/signup")}>회원 가입</SignUpButton>
    </FlexColumnCenterBox>
  );
}
export default SignInPage;
