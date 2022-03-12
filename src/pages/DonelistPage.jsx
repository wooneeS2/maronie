import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "../data/state";
import MenuTabs from "../components/SearchPage/MenuTabs";
import DoneItems from "../components/AuthPage/DoneItems";
import { DonelistComment } from "../data/DonelistComment";
import Loading from "components/Loading";
function DonelistPage() {
  const [isLoading, setIsLoading] = React.useState(null);
  const [user, setUser] = useRecoilState(userState);
  const [currentTab, setCurrentTab] = React.useState("liquor");
  const [countComment, setCountComment] = React.useState("");
  const [donelistData, setDonelistData] = React.useState({});

  React.useEffect(() => {
    if (user === null) {
      alert("회원 전용 기능입니다, 로그인 해주세요!");
      return;
    }
    const call = async () => {
      try {
        setIsLoading(true);
        const response = await axios
          .get(process.env.REACT_APP_DB_HOST + `mypage/donelist/${user["id"]}`)
          .then((res) => res.data);
        setDonelistData(response);
        const commentResult = DonelistComment(
          response[currentTab].length,
          currentTab
        );
        setCountComment(commentResult);
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    };
    call();
  }, [currentTab]);
  if (user === null) {
    return <Navigate to="/signin" replace={true} />;
  }
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div style={{ marginTop: "81px" }}>
          <MenuTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                display:
                  donelistData[currentTab]?.length > 0 ? "block" : "none",
              }}
            >
              {donelistData[currentTab]?.length}
            </h1>
            <p style={{ color: "gray" }}>{countComment}</p>
          </div>
          <DoneItems
            currentTab={currentTab}
            donelistData={donelistData}
            setDonelistData={setDonelistData}
            setCountComment={setCountComment}
          />
        </div>
      )}
    </>
  );
}
export default DonelistPage;
