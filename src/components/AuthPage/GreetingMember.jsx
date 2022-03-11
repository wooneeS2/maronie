import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../data/state";
import { GreetingMemberWrapper } from "design/AuthPage/MyPageStyles";
import { StyledButton } from "design/commonStyles";
function SignInMemberInfo() {
  const [user, setUser] = useRecoilState(userState);

  return (
    <>
      <GreetingMemberWrapper>
        {/* TODO 로그아웃 로직에 따라 수정 필요 */}
        {user !== null && Object.keys(user)?.length > 2 ? (
          <>
            <p>{user["nickname"]}님 안녕하세요!</p>
            <p>오늘도 좋은 하루 되세요🥂</p>
          </>
        ) : (
          <>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p>안녕하세요!</p>
              <Link to="/signin">
                <StyledButton style={{ margin: "0 0 3px 10px" }}>
                  로그인
                </StyledButton>
              </Link>
            </div>
            <p>로그인 하시고 더 많은 기능을 이용해보세요 :{")"}</p>
          </>
        )}
      </GreetingMemberWrapper>
    </>
  );
}
export default SignInMemberInfo;
