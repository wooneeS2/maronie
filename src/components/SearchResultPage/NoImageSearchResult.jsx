import { NoImageResultWrapper } from "../../design/SearchResultPage/ImageSearchResultStyles";
import BetterSearchTip from "./BetterSearchTip";

function NoImageSearchResult() {
  return (
    <NoImageResultWrapper>
      <p style={{ fontSize: "100px", margin: 0 }}>😨</p>
      <div>
        <h2>인식된 술이 없습니다</h2>
      </div>
      <BetterSearchTip type="image" />
    </NoImageResultWrapper>
  );
}
export default NoImageSearchResult;
