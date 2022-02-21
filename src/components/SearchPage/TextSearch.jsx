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
  // TODO: 원희님하고 route 얘기 나눠보기
  let navigate = useNavigate();
  return (
    <>
      <ImageSearchContents>
        <SearchTitle>텍스트로 검색</SearchTitle>
        <SearchDescription>
          양주와 칵테일 이름을 검색할 수 있어요!
        </SearchDescription>
        <TextSearchInputContents>
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
                  onClick={() => navigate(`/text-result`)}
                >
                  <IoSearch style={{ cursor: "pointer" }} />
                </InputAdornment>
              ),
            }}
          />
        </TextSearchInputContents>
        {/* TODO: 반복문으로 수정하기 */}
        {/* TODO: 간격 수정하기 */}
        <h4>최근 검색어</h4>
        <Stack>
          <Chip label="로컬스토리지" size="small" variant="outlined" />
          <Chip label="불러와서" size="small" variant="outlined" />
          <Chip label="만들계획" size="small" variant="outlined" />
        </Stack>
        <h4>추천 검색어</h4>
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
