import { NoImageResultWrapper } from "../../design/SearchResultPage/ImageSearchResultStyles";
import BetterSearchTip from "./BetterSearchTip";

function NoImageSearchResult() {
  return (
    <NoImageResultWrapper>
      <p style={{ fontSize: "100px", margin: 0 }}>π¨</p>
      <div>
        <h2>μΈμλ μ μ΄ μμ΅λλ€</h2>
      </div>
      <BetterSearchTip type="image" />
    </NoImageResultWrapper>
  );
}
export default NoImageSearchResult;
