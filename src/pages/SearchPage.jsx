import React, { useState, useCallback } from "react";
import ImageSearch from "../components/Search/ImageSearch";
import TextSearch from "../components/Search/TextSearch";
import { TabComponent } from "../design/SearchPage/SearchPageStyles";
function SearchPage() {
  const [curSearchTab, setCurSearchTab] = useState("image");

  const handleTabClick = useCallback((e) => {
    const target = e.target;
    const value = target.getAttribute("data-value");
    setCurSearchTab(value);
  }, []);

  const renderContent = useCallback(() => {
    switch (curSearchTab) {
      case "image": {
        return <ImageSearch />;
      }
      case "text": {
        return <TextSearch />;
      }
      default: {
        return <ImageSearch />;
      }
    }
  }, [curSearchTab]);

  return (
    <div>
      <TabComponent onClick={handleTabClick}>
        <button data-value="image">이미지</button>
        <button data-value="text">텍스트</button>
        <button data-value="theme">테마</button>
      </TabComponent>

      <div className="contentArea">{renderContent()}</div>
    </div>
  );
}

export default SearchPage;
