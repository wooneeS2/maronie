import React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import {
  mainRed,
  mainYellowDark,
  mainBlack,
  mainYellowLight,
  mainOrange,
} from "../../design/colorPalette";

const ratingCount = [
  { rating: 1, count: 10 },
  { rating: 2, count: 20 },
  { rating: 3, count: 50 },
  { rating: 4, count: 25 },
  { rating: 5, count: 15 },
];

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

export function LiquorReview({ liquorReviews }) {
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);

  return (
    <>
      <div id="liquorReview">
        <div
          id="ratingBox"
          style={{
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <p style={{ fontWeight: "bold", marginLeft: "1rem" }}>유저 리뷰</p>

          <span
            style={{
              display: "block",
              textAlign: "center",
              fontSize: "1.5rem",
            }}
          >
            {liquorReviews[0].liquorRating}
          </span>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <StyledRating
              name="half-rating-read"
              sx={{
                fontSize: "1rem",
                margin: "0 auto",
              }}
              defaultValue={liquorReviews[0].liquorRating}
              precision={0.5}
              icon={<FavoriteIcon fontSize="inherit" color={mainRed} />}
              emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
              readOnly
            />
          </div>
          <span
            style={{
              display: "block",
              textAlign: "center",
              fontSize: "0.8rem",
              color: "grey",
            }}
          >
            234개의 후기
          </span>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {ratingCount
              .slice(0)
              .reverse()
              .map((i, index) => {
                return (
                  <div
                    key={index + i}
                    style={{
                      display: "flex",
                      margin: "4px 0",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        width: "30%",
                        justifyContent: "flex-end",
                        color: "#f1a90d",
                      }}
                    >
                      {"★".repeat(i.rating)}
                    </div>
                    <div
                      style={{
                        width: "50%",
                        height: "16px",
                        backgroundColor: "#f7f3f0",
                        borderRadius: "5px",
                        marginLeft: "5px",
                        marginRight: "5px",
                      }}
                    >
                      <div
                        style={{
                          width: `${i.count}%`,
                          height: "16px",
                          backgroundColor: `${mainYellowDark}`,
                          display: "flex",
                        }}
                      />
                    </div>
                    <span style={{ display: "flex", fontSize: "0.8rem" }}>
                      {i.count}
                    </span>
                  </div>
                );
              })}
          </div>
          <hr style={{ width: "60%", marginTop: "1rem" }} />
        </div>
        {liquorReviews.map((i, index) => {
          return (
            <div
              key={`${i.userName} ${index}`}
              style={{
                width: "90%",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "0.5rem",
              }}
            >
              <div
                id="reviewBox"
                style={{
                  borderRadius: "0.5rem",
                  padding: "0.8rem",
                  lineHeight: "1.5rem",
                  boxShadow:
                    " rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
                }}
              >
                <span
                  style={{
                    backgroundColor: `${mainYellowLight}`,
                    borderRadius: "1rem",
                    display: "inline-flex",
                    paddingLeft: "4px",
                    paddingRight: "4px",

                    fontSize: "0.8rem",
                  }}
                  id="userRating"
                >
                  ★{i.userRating}
                </span>
                <span id="reviewContent">{i.reviewContent}</span>
              </div>
              <div style={{ margin: "1rem" }}>
                <span
                  id="reviewUser"
                  style={{
                    color: `${mainOrange}`,
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                    display: "flex",
                  }}
                >
                  {i.userName}
                </span>
                <span
                  style={{
                    color: "grey",
                    fontSize: "0.8rem",
                  }}
                >
                  {i.reviewDate}
                </span>
              </div>
            </div>
          );
        })}
        <div
          style={{
            border: "solid 2px #575757",
            padding: "6px 32px",
            borderRadius: "80px",
            maxWidth: "50%",
            textAlign: "center",
            justifyContent: "center",
            alignItem: "center",
            margin: "0 auto",
          }}
        >
          리뷰 더 보기
        </div>
        <div style={{ margin: "1rem", marginTop: "2rem", textAlign: "center" }}>
          <p style={{ fontWeight: "bold" }}>이 술, 000님은 어땠나요?</p>
          <div style={{ fontStyle: "italic" }}>
            {value !== null && (
              <p>〔 {labels[hover !== -1 ? hover : value]} 〕</p>
            )}{" "}
          </div>
          <StyledRating
            sx={{ fontSize: "2.5rem" }}
            name="half-rating-read"
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
      </div>
    </>
  );
}

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: `${mainRed}`,
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});
export default LiquorReview;
