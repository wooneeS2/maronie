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
  if (user === null) {
    return <Navigate to="/signin" replace={true} />;
  }
  return (
    <>
      <div style={{ marginTop: "81px" }}>
        <MenuTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <WishItems currentTab={currentTab} />
      </div>
    </>
  );
}
export default WishlistPage;
