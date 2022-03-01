import React from "react";
import MenuTabs from "../components/SearchPage/MenuTabs";
function Wishlist() {
  const [currentTab, setCurrentTab] = React.useState("liquor");
  const handleChange = (e, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <>
      <MenuTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </>
  );
}
export default Wishlist;
