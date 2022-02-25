import React from "react";
import { styled } from "@mui/material/styles";
import { Rating, TextareaAutosize } from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { mainRed, mainBlack, mainOrange } from "../design/colorPalette";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: `${mainRed}`,
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const labels = {
  0: "별점을 선택해주세요",
  0.5: "🤮 웩, 진짜 별로예요.",
  1: "🤢 진짜 별로예요.",
  1.5: "😵‍💫 별로예요.",
  2: "😬 제 입에는 안 맞아요.",
  2.5: "🤔 그저그래요.",
  3: "🙃 보통이에요.",
  3.5: "🙂 좋아요.",
  4: "😃 맛있어요.",
  4.5: "😄 완전 맛있어요.",
  5: "😍 완전 제 취향이에요.",
};

function ReviewPage() {
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  return (
    <>
      <p style={{ textAlign: "center" }}>리뷰를 남겨주세요!</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div>
          <img
            src="https://d1e2y5wc27crnp.cloudfront.net/media/smartorder_reservation/product_detail/ef845bd4-215a-4e10-99da-4fdb85ce8aef.png"
            alt="liquor"
            style={{
              width: "30vw",
              height: "35vw",
              maxWidth: "250px",
              maxHeight: "300px",
            }}
          />
          <p style={{ fontWeight: "bold" }}>엑스레이티드</p>
        </div>
        <div>
          <span
            style={{
              display: "block",
              textAlign: "center",
              fontSize: "1rem",
            }}
          >
            {value !== null && (
              <span>{labels[hover !== -1 ? hover : value]} </span>
            )}{" "}
          </span>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <StyledRating
              name="half-rating-read"
              sx={{
                fontSize: "2.5rem",
                margin: "0 auto",
              }}
              defaultValue={0}
              precision={0.5}
              icon={<FavoriteIcon fontSize="inherit" color={mainRed} />}
              emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
            />
          </div>
          <TextareaAutosize
            minRows={5}
            aria-label="maximum height"
            placeholder="술에 대한 후기를 남겨주세요. 술의 맛, 느낌, 분위기, 가격대 등 어떤 내용이라도 좋아요!"
            style={{
              maxWidth: "300px",
              width: "70%",
              padding: "1rem",
              borderRadius: "1rem",
              borderColor: "grey",
              border: "solid 0.5px",
            }}
          />
        </div>
        <button
          style={{
            maxWidth: "60%",
            display: "flex",
            padding: "1rem 2rem",
            textAlign: "center",
            margin: "0 auto",
            marginTop: "1rem",
            borderRadius: "30px",
            borderColor: "transparent",
            backgroundColor: `${mainOrange}`,
            color: "white",
            fontWeight: "bold",
          }}
        >
          등록하기
        </button>
      </div>
    </>
  );
}

export default ReviewPage;
