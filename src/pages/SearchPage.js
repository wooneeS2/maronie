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

  const exampleClick1 = () => {
    console.log("exam 1");
  };

  const exampleClick2 = (e) => {
    e.stopPropagation();
    console.log("exam 2");
  };

  const exampleClick3 = () => {
    console.log("exam 3");
  };

  return (
    <div>
      <div className="menuBar">
        <ul className="tabs" onClick={handleTabClick}>
          <li data-value="image">이미지</li>
          <li data-value="text">텍스트</li>
          <li data-value="theme">테마</li>
        </ul>
      </div>

      <div onClick={exampleClick3}>
        <div onClick={exampleClick2}>exam2</div>
        <div onClick={exampleClick1}>exam1</div>
      </div>

      <div className="contentArea">{renderContent()}</div>
    </div>
  );
}

export default SearchPage;
