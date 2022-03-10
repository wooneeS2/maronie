import React from "react";
import {
  ImageSearchContents,
  SearchDescription,
  SearchTitle,
  Stack,
  SearchHistoryDeleteButton,
  StyledChip,
} from "../../design/SearchPage/SearchPageStyles";

import TextSearchInput from "../../components/SearchPage/TextSearchInput";
import { searchRecommendKeywords } from "../../data/searchRecommendKeyword";
function TextSearch() {
  const textSearchRecordList =
    JSON.parse(window.localStorage.getItem("textSearchValue")) || [];
  const [searchTextList, setSearchTextList] =
    React.useState(textSearchRecordList);

  const handleDeleteSearchKeyword = (idx) => {
    const textSearchRecordList =
      JSON.parse(window.localStorage.getItem("textSearchValue")) || [];

    if (textSearchRecordList.length > 0) {
      const targetWord = textSearchRecordList[idx];
      const newList = textSearchRecordList.filter(
        (word) => word !== targetWord
      );
      setSearchTextList(newList);
      window.localStorage.setItem("textSearchValue", JSON.stringify(newList));
    }
  };

  const handleDeleteAllSearchKeyword = () => {
    window.localStorage.removeItem("textSearchValue");
    setSearchTextList([]);
  };

  return (
    <>
      <ImageSearchContents>
        <SearchTitle>텍스트로 검색</SearchTitle>
        <SearchDescription>
          양주와 칵테일 이름을 검색할 수 있어요!
        </SearchDescription>
        <TextSearchInput />

        <h4>최근 검색어</h4>
        <Stack>
          {searchTextList.map((item, idx) => (
            <StyledChip
              key={`text-${idx}`}
              label={item}
              sx={{ padding: "5px", margin: "0 2px" }}
              variant="outlined"
              onDelete={() => handleDeleteSearchKeyword(idx)}
              onClick={() =>
                (window.location.href = `/text-search-result/${item}`)
              }
              clickable
            />
          ))}
        </Stack>
        <div>
          <SearchHistoryDeleteButton
            onClick={() => handleDeleteAllSearchKeyword()}
          >
            전체 삭제
          </SearchHistoryDeleteButton>
        </div>
        <h4>추천 검색어</h4>
        <Stack>
          {searchRecommendKeywords.map((item, idx) => (
            <StyledChip
              component="a"
              key={`recommend-${idx}`}
              label={item}
              variant="outlined"
              href={`/text-search-result/${item}`}
            />
          ))}
        </Stack>
      </ImageSearchContents>
    </>
  );
}
export default TextSearch;
