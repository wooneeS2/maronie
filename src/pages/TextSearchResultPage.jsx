import React from "react";
import { Tab, Tabs } from "@mui/material";
import { useParams } from "react-router-dom";
import { SearchContentsWrapper } from "../design/SearchPage/SearchPageStyles";
function TextSearchResultPage() {
  let params = useParams();
  const searchKeyword = params.keyword;

  const [currentTab, setCurrentTab] = React.useState("liquor");
  const handleChange = (e, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <>
      <p>{searchKeyword} 검색 결과</p>
      <Tabs value={currentTab} onChange={handleChange}>
        <Tab value="liquor" label="술" />
        <Tab value="cocktail" label="칵테일" />
      </Tabs>
      <SearchContentsWrapper className="contentArea">
        {/* TODO: 내용물 넣기 */}
      </SearchContentsWrapper>
    </>
  );
}

export default TextSearchResultPage;
