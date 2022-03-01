import React from "react";
function SignInMemberInfo() {
  //test data
  const [member, setMember] = React.useState(null);
  return (
    <>
      {member ? (
        <>
          <p>{member}님 안녕하세요!</p>
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
