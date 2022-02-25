import React from "react";
import {
  ImageSearchContents,
  SearchDescription,
  SearchTitle,
  TextSearchInputContents,
  Stack,
  SearchHistoryDeleteButton,
} from "../../design/SearchPage/SearchPageStyles";
import { TextField, InputAdornment, Chip } from "@mui/material";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { searchRecommendKeywords } from "../../data/searchRecommendKeyword";
function TextSearch() {
  let navigate = useNavigate();
  let [textSearchValue, setTextSearchValue] = React.useState("");
  const [searchTextList, setSearchTextList] = React.useState([]);

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

  const afterEnterSearchKeyword = () => {
    if (textSearchValue === "") return;
    navigate(`/text-search-result/${textSearchValue}`);

    const textSearchRecordList =
      JSON.parse(window.localStorage.getItem("textSearchValue")) || [];
    let temp = new Set([...textSearchRecordList, textSearchValue]);
    let newTextSearchRecordList = [...temp];
    setSearchTextList(newTextSearchRecordList);
    window.localStorage.setItem(
      "textSearchValue",
      JSON.stringify(newTextSearchRecordList)
    );
  };

  React.useEffect(() => {
    /**
     * 검색 텍스트 초기화
     */
    const textSearchRecordList =
      JSON.parse(window.localStorage.getItem("textSearchValue")) || [];
    setSearchTextList(textSearchRecordList);
  }, []);

  return (
    <>
      <ImageSearchContents>
        <SearchTitle>텍스트로 검색</SearchTitle>
        <SearchDescription>
          양주와 칵테일 이름을 검색할 수 있어요!
        </SearchDescription>
        <TextSearchInputContents>
          <TextField
            onChange={(e) => setTextSearchValue(e.target.value)}
            sx={{ m: 1 }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                afterEnterSearchKeyword();
              }
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IoSearch
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      afterEnterSearchKeyword();
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />
        </TextSearchInputContents>
        {/* TODO: 간격 수정하기 */}

        <h4>최근 검색어</h4>
        <Stack>
          {searchTextList.map((item, idx) => (
            <Chip
              key={`text-${idx}`}
              label={item}
              size="small"
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
      </ImageSearchContents>
    </>
  );
}
export default TextSearch;
