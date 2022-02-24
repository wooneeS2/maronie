import React from "react";
import {
  ImageSearchContents,
  SearchDescription,
  SearchTitle,
  TextSearchInputContents,
  Stack,
} from "../../design/SearchPage/SearchPageStyles";
import { TextField, InputAdornment, Chip } from "@mui/material";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function TextSearch() {
  let navigate = useNavigate();
  let [textSearchValue, setTextSearchValue] = React.useState("");
  const [searchTextList, setSearchTextList] = React.useState([]);

  const handleDeleteSearchKeyword = (idx) => {
    console.info("검색어 삭제 버튼 클릭함");
    const textSearchRecordList =
      JSON.parse(window.localStorage.getItem("textSearchValue")) || [];

    if (textSearchRecordList.length > 0) {
      const targetWord = textSearchRecordList[idx];
      const newList = textSearchRecordList.filter(
        (word) => word !== targetWord
      );
      setSearchTextList(newList);
    }
  };

  const afterEnterSearchKeyword = () => {
    if (textSearchValue === "") return;
    navigate(`/text-search-result/${textSearchValue}`);

    const textSearchRecordList =
      JSON.parse(window.localStorage.getItem("textSearchValue")) || [];
    textSearchRecordList.push(textSearchValue);

    setSearchTextList([...textSearchRecordList]);

    window.localStorage.setItem(
      "textSearchValue",
      JSON.stringify(textSearchRecordList)
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
        <button
          onClick={() => window.localStorage.removeItem("textSearchValue")}
        >
          검색어 삭제하기
        </button>
        <h4>최근 검색어</h4>
        <Stack>
          {searchTextList.map((item, idx) => (
            <Chip
              key={`text-${idx}`}
              label={item}
              size="small"
              variant="outlined"
              onDelete={() => handleDeleteSearchKeyword(idx)}
            />
          ))}
        </Stack>
        <h4>추천 검색어</h4>
        {/* TODO: 반복문으로 수정하기 */}
        <Stack>
          <Chip label="샐러드" size="small" variant="outlined" />
          <Chip label="경량패딩조끼" size="small" variant="outlined" />
          <Chip label="다우니" size="small" variant="outlined" />
        </Stack>
      </ImageSearchContents>
    </>
  );
}
export default TextSearch;
