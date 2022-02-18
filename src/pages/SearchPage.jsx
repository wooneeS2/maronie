import React, { useState, useCallback } from "react";
import ImageSearch from "../components/SearchPage/ImageSearch";
import TextSearch from "../components/SearchPage/TextSearch";
import {
  TabButton,
  TabComponent,
  SearchContentsWrapper,
} from "../design/SearchPage/SearchPageStyles";
import { BsCardImage, BsChatTextFill, BsHash } from "react-icons/bs";
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
    <>
      <TabComponent onClick={handleTabClick}>
        <TabButton isSelected={curSearchTab === "image"} data-value="image">
          <BsCardImage size="20" />
          이미지
        </TabButton>
        <TabButton isSelected={curSearchTab === "text"} data-value="text">
          <BsChatTextFill size="20" />
          텍스트
        </TabButton>
        <TabButton isSelected={curSearchTab === "theme"} data-value="theme">
          <BsHash size="20" />
          테마
        </TabButton>
      </TabComponent>

      <SearchContentsWrapper className="contentArea">
        {renderContent()}
      </SearchContentsWrapper>
    </>
  );
}

export default SearchPage;
