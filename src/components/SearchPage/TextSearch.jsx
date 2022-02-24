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
  let textSearchRecordList =
    JSON.parse(window.localStorage.getItem("textSearchValue")) || [];
  const handleDeleteSearchKeyword = () => {
    console.info("검색어 삭제 버튼 클릭함");
  };

  const afterEnterSearchKeyword = () => {
    if (textSearchValue === "") return;
    navigate(`/text-search-result/${textSearchValue}`);
    textSearchRecordList.push(textSearchValue);
    window.localStorage.setItem(
      "textSearchValue",
      JSON.stringify(textSearchRecordList)
    );
  };
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
          {textSearchRecordList.map((item) => (
            <Chip
              label={item}
              size="small"
              variant="outlined"
              onDelete={handleDeleteSearchKeyword}
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
