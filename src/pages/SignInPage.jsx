import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { StyledLink, SubmitButton } from "../design/AuthPage/SignInPageStyles";
function SignInPage() {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  return (
    <>
      <p>로그인</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "10px",
        }}
      >
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HiOutlineMail />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RiLockPasswordLine />
              </InputAdornment>
            ),
          }}
        />
        <SubmitButton type="submit" onClick={() => alert(email + password)}>
          Sign in
        </SubmitButton>
      </div>

      <p>
        아직 회원이 아니신가요?
        <StyledLink to="/signup">회원 가입</StyledLink>
      </p>
    </>
  );
}
export default SignInPage;
