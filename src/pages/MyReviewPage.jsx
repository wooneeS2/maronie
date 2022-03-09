import React from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "../data/state";
import MenuTabs from "../components/SearchPage/MenuTabs";
import ReviewItems from "../components/AuthPage/ReviewItems";
function MyReviewPage() {
  const [user, setUser] = useRecoilState(userState);
  const [currentTab, setCurrentTab] = React.useState("liquor");
  const [isLoading, setIsLoading] = React.useState(false);
  const [reviewData, setReviewData] = React.useState({});

  React.useEffect(() => {
    const call = async () => {
      setIsLoading(true);
      const response = await axios
        .get(
          process.env.REACT_APP_DB_HOST + `Mypage/review/user_id=${user["id"]}`
        )
        .then((res) => res.data);
      // TODO 백엔드에서 수정해주실지 확인
      console.log(response);
      setReviewData(response);
      setIsLoading(false);
    };
    call();
  }, []);
  return (
    <>
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        <>
          <MenuTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
          <div>
            <ReviewItems currentTab={currentTab} obj={reviewData[currentTab]} />
          </div>
        </>
      )}
    </>
  );
}
export default MyReviewPage;
