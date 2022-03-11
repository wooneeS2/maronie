import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "../data/state";
import MenuTabs from "../components/SearchPage/MenuTabs";
import WishItems from "../components/AuthPage/WishItems";
import Loading from "../components/Loading";
function WishlistPage() {
  const [currentTab, setCurrentTab] = React.useState("liquor");
  const [user, setUser] = useRecoilState(userState);
  const [isLoading, setIsLoading] = React.useState(null);
  const [wishlistData, setWishlistData] = React.useState({});

  React.useEffect(() => {
    if (user === null) {
      alert("회원 전용 기능입니다, 로그인 해주세요!");
      return;
    }
    const call = async () => {
      try {
        setIsLoading(true);
        const response = await axios
          .get(process.env.REACT_APP_DB_HOST + `mypage/wishlist/${user["id"]}`)
          .then((res) => res.data);
        setWishlistData(response);
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
        <>
          <div style={{ marginTop: "81px" }}>
            <MenuTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <WishItems
              currentTab={currentTab}
              wishlistData={wishlistData}
              setWishlistData={setWishlistData}
            />
          </div>
        </>
      )}
    </>
  );
}
export default WishlistPage;
