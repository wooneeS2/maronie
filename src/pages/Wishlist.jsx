import React from "react";
import { Tab, Tabs } from "@mui/material";
function Wishlist() {
  const [currentTab, setCurrentTab] = React.useState("liquor");
  const handleChange = (e, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <>
      <Tabs variant="fullWidth" value={currentTab} onChange={handleChange}>
        <Tab value="liquor" label="술" />
        <Tab value="cocktail" label="칵테일" />
      </Tabs>
    </>
  );
}
export default Wishlist;
