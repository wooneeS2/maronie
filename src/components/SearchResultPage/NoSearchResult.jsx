import { useParams } from "react-router-dom";
import { Chip } from "@mui/material";
import { searchRecommendKeywords } from "../../data/searchRecommendKeyword";
import { Stack } from "../../design/SearchPage/SearchPageStyles";
import { NoResultWrapper } from "../../design/SearchResultPage/TextSearchResultPageStyles";
import BetterTextSearchTip from "./BetterTextSearchTip";
function NoSearchResult({ currentTab }) {
  const params = useParams();
  const searchKeyword = params.keyword;
  return (
    <NoResultWrapper>
      <p style={{ fontSize: "100px", margin: 0 }}>😨</p>
      <div>
        <p>
          <b>{searchKeyword}</b>에 대한{" "}
          {currentTab === "liquor" ? "술" : "칵테일"} 검색 결과가 없습니다
        </p>
        <BetterTextSearchTip />
        <p>마로니에가 추천하는 다음 검색어는 어떠세요?</p>
        <Stack>
          {searchRecommendKeywords.map((item, idx) => (
            <Chip
              component="a"
              key={`recommend-${idx}`}
              label={item}
              size="small"
              variant="outlined"
              href={`/text-search-result/${item}`}
            />
          ))}
        </Stack>
      </div>
    </NoResultWrapper>
  );
}

export default NoSearchResult;
