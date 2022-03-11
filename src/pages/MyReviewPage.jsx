import React from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "../data/state";
import ReviewItems from "../components/AuthPage/ReviewItems";
function MyReviewPage() {
  const [user, setUser] = useRecoilState(userState);
  const [currentTab, setCurrentTab] = React.useState("liquor");
  const [isLoading, setIsLoading] = React.useState(false);
  const [reviewData, setReviewData] = React.useState({});

  React.useEffect(() => {
    setIsLoading(true);
    const call = async () => {
      const response = await axios
        .get(process.env.REACT_APP_DB_HOST + `mypage/review/${user["id"]}`)
        .then(res => res.data);
      setReviewData(response);
      setIsLoading(false);
    };
    call();
  }, []);
  return (
    <>
      {isLoading ? (
        <>
          <div>로딩중</div>
          <div>로딩중</div> <div>로딩중</div> <div>로딩중</div>
          <div>로딩중</div>
        </>
      ) : (
        <>
          <div>
            <ReviewItems list={reviewData} />
          </div>
        </>
      )}
    </>
  );
}
export default MyReviewPage;
