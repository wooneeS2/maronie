import { BetterSearchResultItem } from "../../design/SearchResultPage/TextSearchResultPageStyles";
function BetterTextSearchTip({ type }) {
  if (type === "text") {
    return (
      <>
        <ul>
          <BetterSearchResultItem>
            단어의 철자가 정확한지 확인해 보세요.
          </BetterSearchResultItem>
          <BetterSearchResultItem>
            검색어의 단어 수를 줄여보세요.
          </BetterSearchResultItem>
        </ul>
      </>
    );
  } else {
    return (
      <ul>
        <BetterSearchResultItem>밝은 곳에서 찍어보세요</BetterSearchResultItem>
        <BetterSearchResultItem>
          선명한 화질을 위해서 렌즈를 닦고 촬영해 보세요
        </BetterSearchResultItem>
      </ul>
    );
  }
}
export default BetterTextSearchTip;
