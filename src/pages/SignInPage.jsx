import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../data/state";
import {
  SubmitButton,
  SignInInput,
  SignUpButton,
} from "../design/AuthPage/SignInPageStyles";
import { FlexColumnCenterBox, BothSideLineText } from "../design/commonStyles";
function SignInPage() {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);
  const handleSubmitSignIn = () => {
    axios
      .post(process.env.REACT_APP_DB_HOST + "auth/login", {
        email,
        password,
      })
      .then((res) => {
        setUser(() => res.data);
        alert(res.data.nickname + "님! 안녕하세요 :)");
        // TODO: 이전 페이지 주소 가져와서 그곳으로 이동 or 인트로 페이지
        navigate("/");
      })
      .catch((e) => {
        let errorMsg = e.response.data.message;
        if (errorMsg === "User Not Found") {
          alert("가입되지 않은 이메일입니다");
        } else if (errorMsg === "Auth Failed(Wrong password)") {
          alert("비밀번호를 확인해주세요");
        } else {
          alert("아이디 또는 비밀번호를 확인해주세요");
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
        type="password"
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
