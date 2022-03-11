import React from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "../data/state";
import MenuTabs from "../components/SearchPage/MenuTabs";
import WishItems from "../components/AuthPage/WishItems";
import { DonelistComment } from "../data/DonelistComment";
function DonelistPage() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [user, setUser] = useRecoilState(userState);
  const [currentTab, setCurrentTab] = React.useState("liquor");
  const [countComment, setCountComment] = React.useState("");
  const [donelistData, setDonelistData] = React.useState({});

  React.useEffect(() => {
    setIsLoading(true);
    const call = async () => {
      const response = await axios
        .get(process.env.REACT_APP_DB_HOST + `mypage/donelist/${user["id"]}`)
        .then((res) => res.data);
      setDonelistData(response);
      const commentResult = DonelistComment(
        response[currentTab].length,
        currentTab
      );
      setCountComment(commentResult);
      setIsLoading(false);
    };
    call();
  }, []);
  return (
    <>
      {isLoading ? (
        // TODO 로딩중 컴포넌트 삽입 예정
        <>
          <div>로딩중</div>
          <div>로딩중</div> <div>로딩중</div> <div>로딩중</div>{" "}
          <div>로딩중</div>
        </>
      ) : (
        <>
          <MenuTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
          <div style={{ textAlign: "center" }}>
            <h1>{donelistData[currentTab]?.length}</h1>
            <p style={{ color: "gray" }}>{countComment}</p>
          </div>
          <WishItems
            list={donelistData[currentTab] || []}
            currentTab={currentTab}
            page="donelist"
          />
        </>
      )}
    </>
  );
}
export default DonelistPage;
