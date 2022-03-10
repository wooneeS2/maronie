import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../data/state";
function SignInMemberInfo() {
  const [user, setUser] = useRecoilState(userState);

  return (
    <>
      {Object.keys(user).length > 2 ? (
        <>
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              padding: "40px 20px",
            }}
          >
            <p>{user["nickname"]}님 안녕하세요!</p>
            <p>오늘도 좋은 하루 되세요🥂</p>
          </div>
        </>
      ) : (
        <>
          <p>안녕하세요!</p>
          <Link to="/signin">
            <button>로그인</button>
          </Link>
          <p>로그인 하시면 더 많은 기능을 이용하실 수 있어요 :{")"}</p>
        </>
      )}
    </>
  );
}
export default SignInMemberInfo;
