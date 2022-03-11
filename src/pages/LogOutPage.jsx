import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "data/state";
import { useNavigate } from "react-router-dom";
import { MoreButton } from "design/SearchResultPage/ImageSearchResultStyles";

export default function LogOutPage() {
  const url = process.env.REACT_APP_DB_HOST;
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();
  const handleLogOut = async () => {
    const logOut = await axios.post(`${url}auth/logout`);
    setUser(null);
    console.log(logOut);
    if (logOut.status == 200) {
      window.alert("로그아웃 되었습니다.");
      navigate("/");
    }
  };
  return (
    <div
      style={{
        margin: "0 auto",
        paddingTop: "80px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <p>
        <span
          style={{
            background: "linear-gradient(to top, #F5C085 55%, transparent 50%)",
          }}
        >
          {user && user.nickname}님
        </span>
        {"  "}마로니에 사용은 어떠셨나요?
      </p>
      <p style={{ marginBottom: "2rem" }}>오늘은 이만 로그아웃하시겠어요?</p>

      <MoreButton
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          width: "100%",
        }}
        onClick={() => {
          handleLogOut();
        }}
      >
        로그아웃
      </MoreButton>
    </div>
  );
}
