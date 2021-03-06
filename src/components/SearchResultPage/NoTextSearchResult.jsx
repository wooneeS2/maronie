import { useParams } from "react-router-dom";
import { Chip } from "@mui/material";
import { searchRecommendKeywords } from "../../data/searchRecommendKeyword";
import { Stack } from "../../design/SearchPage/SearchPageStyles";
import { NoTextResultWrapper } from "../../design/SearchResultPage/TextSearchResultPageStyles";
import BetterSearchTip from "./BetterSearchTip";
function NoSearchResult({ currentTab }) {
  const params = useParams();
  const searchKeyword = params.keyword;
  return (
    <NoTextResultWrapper>
      <p style={{ fontSize: "100px", margin: 0 }}>π¨</p>
      <div>
        <p style={{ margin: "10px" }}>
          <b>{searchKeyword}</b>μ λν{" "}
          {currentTab === "liquor" ? "μ " : "μΉ΅νμΌ"} κ²μ κ²°κ³Όκ° μμ΅λλ€
        </p>
        <BetterSearchTip type="text" />
        <p style={{ margin: "10px" }}>
          λ§λ‘λμκ° μΆμ²νλ λ€μ κ²μμ΄λ μ΄λ μΈμ?
        </p>
        <Stack>
          {searchRecommendKeywords.map((item, idx) => (
            <Chip
              component="a"
              key={`recommend-${idx}`}
              label={item}
              variant="outlined"
              href={`/text-search-result/${item}`}
            />
          ))}
        </Stack>
      </div>
    </NoTextResultWrapper>
  );
}

export default NoSearchResult;
