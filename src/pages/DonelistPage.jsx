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
  const [comment, setComment] = React.useState("");
  const [donelistData, setDonelistData] = React.useState({
    liquor: [],
    cocktail: [],
  });

  React.useEffect(() => {
    setIsLoading(true);
    const call = async () => {
      setIsLoading(true);
      await axios
        .get(process.env.REACT_APP_DB_HOST + `Mypage/donelist=${user["id"]}`)
        .then((res) => setDonelistData(res.data))
        .then(() =>
          setComment(
            DonelistComment(donelistData[currentTab].length, currentTab)
          )
        );
    };
    call();
    setIsLoading(false);
  }, []);
  return (
    <>
      {isLoading ? (
        // TODO 로딩중 컴포넌트 삽입 예정
        <div>로딩중</div>
      ) : (
        <>
          <MenuTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
          <div style={{ textAlign: "center" }}>
            <h1>{donelistData[currentTab].length}</h1>
            <p style={{ color: "gray" }}>{comment}</p>
          </div>
          <WishItems obj={donelistData[currentTab]} currentTab={currentTab} />
        </>
      )}
    </>
  );
}
export default DonelistPage;
