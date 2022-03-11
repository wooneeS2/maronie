import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "../data/state";
import ReviewItems from "../components/AuthPage/ReviewItems";
import Loading from "components/Loading";
function MyReviewPage() {
  const [user, setUser] = useRecoilState(userState);
  const [isLoading, setIsLoading] = React.useState(null);
  const [reviewData, setReviewData] = React.useState({});

  React.useEffect(() => {
    if (user === null) {
      alert("회원 전용 기능입니다, 로그인 해주세요!");
      return;
    }
    const call = async () => {
      try {
        setIsLoading(true);
        const response = await axios
          .get(process.env.REACT_APP_DB_HOST + `mypage/review/${user["id"]}`)
          .then((res) => res.data);
        setReviewData(response);
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    };
    call();
  }, []);
  if (user === null) {
    return <Navigate to="/signin" replace={true} />;
  }
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div style={{ marginTop: "81px" }}>
            <ReviewItems list={reviewData} />
          </div>
        </>
      )}
    </>
  );
}
export default MyReviewPage;
