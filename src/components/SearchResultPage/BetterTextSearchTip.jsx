import { BetterSearchResultItem } from "../../design/SearchResultPage/TextSearchResultPageStyles";
function BetterTextSearchTip() {
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
}
export default BetterTextSearchTip;
