import {
  ImageSearchContents,
  SearchDescription,
  SearchTextInput,
  SearchTitle,
  TextSearchContents,
  TextSearchEnterButton,
} from "../../design/SearchPage/SearchPageStyles";
import { TextField, InputAdornment } from "@mui/material";
import { IoSearch } from "react-icons/io5";
function TextSearch() {
  return (
    <>
      <ImageSearchContents>
        <SearchTitle>텍스트로 검색</SearchTitle>
        <SearchDescription>
          양주와 칵테일 이름을 검색할 수 있어요!
        </SearchDescription>
        <TextSearchContents>
          <TextField
            id="textSearch"
            sx={{ m: 1 }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                alert("엔터!");
              }
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={() =>
                    alert(
                      "엔터키를 누른 것과 같은 결과가 나오는 검색 버튼(구구절절)"
                    )
                  }
                >
                  <IoSearch style={{ cursor: "pointer" }} />
                </InputAdornment>
              ),
            }}
          />
        </TextSearchContents>
      </ImageSearchContents>
    </>
  );
}
export default TextSearch;
