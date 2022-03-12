import React from "react";
import { Tab, Tabs } from "@mui/material";
function MenuTabs({ currentTab, setCurrentTab }) {
  const handleChange = (e, newValue) => {
    setCurrentTab(newValue);
  };
  return (
    <Tabs variant="fullWidth" value={currentTab} onChange={handleChange}>
      <Tab value="liquor" label="술" />
      <Tab value="cocktail" label="칵테일" />
    </Tabs>
  );
}
export default MenuTabs;
