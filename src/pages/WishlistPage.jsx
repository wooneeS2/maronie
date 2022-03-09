import React from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "../data/state";
import MenuTabs from "../components/SearchPage/MenuTabs";
import WishItems from "../components/AuthPage/WishItems";

function WishlistPage() {
  const [currentTab, setCurrentTab] = React.useState("liquor");
  const [user, setUser] = useRecoilState(userState);
  const [isLoading, setIsLoading] = React.useState(false);
  const [wishlistData, setWishlistData] = React.useState({});

  React.useEffect(() => {
    setIsLoading(true);
    const call = async () => {
      const response = await axios
        .get(process.env.REACT_APP_DB_HOST + `mypage/wishlist/${user["id"]}`)
        .then((res) => res.data);
      setWishlistData(response);
      setIsLoading(false);
    };
    call();
  }, []);
  return (
    <>
      {isLoading ? (
        // TODO 로딩중 컴포넌트 넣기
        <>
          <div>로딩중</div>
          <div>로딩중</div>
          <div>로딩중</div>
          <div>로딩중</div>
          <div>로딩중</div>
          <div>로딩중</div> <div>로딩중</div> <div>로딩중</div>
          <div>로딩중</div> <div>로딩중</div> <div>로딩중</div>
          <div>로딩중</div>
        </>
      ) : (
        <>
          <MenuTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
          <div>
            <WishItems
              currentTab={currentTab}
              list={wishlistData[currentTab] || []}
              page="wishlist"
            />
          </div>
        </>
      )}
    </>
  );
}
export default WishlistPage;
