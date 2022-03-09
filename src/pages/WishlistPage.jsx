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
      setIsLoading(true);
      const response = await axios
        .get(process.env.REACT_APP_DB_HOST + `Mypage/wishlist=${user["id"]}`)
        .then((res) => res.data);
      // TODO 백엔드에서 수정해주실지 확인
      setWishlistData(response);
    };
    call();
    setIsLoading(false);
    console.log(wishlistData);
  }, []);
  return (
    <>
      <MenuTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div>
        <WishItems currentTab={currentTab} obj={wishlistData[currentTab]} />
      </div>
    </>
  );
}
export default WishlistPage;
