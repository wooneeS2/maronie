import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "data/state";
import { useNavigate } from "react-router-dom";

export default function LogOutPage() {
  const url = process.env.REACT_APP_DB_HOST;
  const [user, setUser] = useRecoilState(userState);
  const handleLogOut = async () => {
    const logOut = await axios.post(`${url}auth/logout`);

    setUser(null);
    console.log(user);
  };
  return (
    <div style={{ paddingTop: "80px" }}>
      <button
        onClick={() => {
          handleLogOut();
        }}
      >
        로그아웃
      </button>
      <p>g</p>
    </div>
  );
}
