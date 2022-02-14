import { useState } from "react";
import ImageSearch from "../components/Search/ImageSearch";
import TextSearch from "../components/Search/TextSearch";

function SearchPage() {
  const [curSearchTab, setCurSearchTab] = useState(0);
  const searchTabList = { 0: <ImageSearch />, 1: <TextSearch /> };
  return (
    <div>
      <div className="menuBar">
        <ul className="tabs">
          <li onClick={() => setCurSearchTab(0)}>이미지</li>
          <li onClick={() => setCurSearchTab(1)}>텍스트</li>
          <li onClick={() => setCurSearchTab(2)}>테마</li>
        </ul>
      </div>
      <div className="contentArea">{searchTabList[curSearchTab]}</div>
    </div>
  );
}
export default SearchPage;
