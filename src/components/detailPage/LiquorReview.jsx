import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Rating } from "@mui/material";
import {
  mainRed,
  mainYellowDark,
  mainBlack,
  mainYellowLight,
} from "../../design/colorPalette";
import { VictoryLabel, VictoryBar, VictoryAxis, VictoryChart } from "victory";

const liquorRatingMessage = {
  1: "매니아들만 찾아요.",
  2: "호불호가 갈려요.",
  3: "평범해요!",
  4: "대부분 좋아해요.",
  5: "이 술 싫어하는 사람을 본적이 없어요!",
};

const userRatingMessage = {
  1: "별로예요.",
  2: "그저그래요.",
  3: "맛있어요.",
};

const ratingCount = [
  { rating: 1, count: 10 },
  { rating: 2, count: 20 },
  { rating: 3, count: 50 },
  { rating: 4, count: 25 },
  { rating: 5, count: 15 },
];

export function LiquorReview({ liquorReviews }) {
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
            <Rating
              name="half-rating-read"
              sx={{
                fontSize: "1rem",
                margin: "0 auto",
              }}
              defaultValue={liquorReviews[0].liquorRating}
              precision={0.5}
              icon={<MdFavorite fontSize="inherit" color={mainRed} />}
              emptyIcon={<MdFavoriteBorder fontSize="inherit" />}
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
            <div key={`${i.userName} ${index}`}>
              <div id="reviewBox">
                <p id="reviewUser">{i.userName}</p>
                <p id="userRating">{userRatingMessage[i.userRating]}</p>
                <p id="reviewContent">{i.reviewContent}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default LiquorReview;
