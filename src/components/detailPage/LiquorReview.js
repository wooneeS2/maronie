import React from "react";
import { MdOutlineCreate, MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Rating } from "@mui/material";

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

export function LiquorReview({ liquorReviews }) {
  return (
    <>
      <div id="liquorReview">
        <div id="ratingBox">
          <p>호불호 지수</p>
          <Rating
            name="half-rating-read"
            defaultValue={liquorReviews[0].liquorRating}
            precision={0.5}
            icon={<MdFavorite fontSize="inherit" color="#ff6d75" />}
            emptyIcon={<MdFavoriteBorder fontSize="inherit" />}
            readOnly
          />
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
        <button>
          <MdOutlineCreate />
        </button>
      </div>
    </>
  );
}

export default LiquorReview;
