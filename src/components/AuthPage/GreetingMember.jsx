import React from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../data/state";
function SignInMemberInfo() {
  const [user, setUser] = useRecoilState(userState);
  return (
    <>
      {Object.keys(user).length > 2 ? (
        <>
          <p>{user["nickname"]}님 안녕하세요!</p>
        </>
      ) : (
        <>
          <p>안녕하세요!</p>
          <p>로그인 하시면 더 많은 기능을 이용하실 수 있어요 :{")"}</p>
        </>
      )}
    </>
  );
}
export default SignInMemberInfo;
