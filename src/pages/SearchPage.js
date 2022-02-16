import React, { useState } from "react";
import ImageSearch from "../components/Search/ImageSearch";
import TextSearch from "../components/Search/TextSearch";

function SearchPage() {
  const [curSearchTab, setCurSearchTab] = useState("image");

  const handleTabClick = React.useCallback((e) => {
    const target = e.target;
    const value = target.getAttribute("data-value");
    setCurSearchTab(value);
  }, []);

  const renderContent = React.useCallback(() => {
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
      <div className="menuBar">
        <ul className="tabs" onClick={handleTabClick}>
          <li data-value="image">이미지</li>
          <li data-value="text">텍스트</li>
          <li data-value="theme">테마</li>
        </ul>
      </div>

      <div className="contentArea">{renderContent()}</div>
    </div>
  );
}

export default SearchPage;
