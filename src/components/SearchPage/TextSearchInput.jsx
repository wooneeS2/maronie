import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
function TextSearchInput() {
  const navigate = useNavigate();
  const params = useParams();
  const searchKeyword = params.keyword;
  const [textSearchValue, setTextSearchValue] = React.useState(
    searchKeyword || ""
  );
  const handleClear = () => {
    setTextSearchValue("");
  };
  const afterEnterSearchKeyword = () => {
    if (textSearchValue === "") return;
    navigate(`/text-search-result/${textSearchValue}`);
  };

  return (
    <>
      <TextField
        value={textSearchValue}
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
              <MdCancel
                style={{ display: textSearchValue ? "" : "none" }}
                onClick={handleClear}
              />
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
    </>
  );
}
export default TextSearchInput;
