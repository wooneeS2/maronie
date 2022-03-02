import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Rating } from "@mui/material";
import {
  LiquorBox,
  RatingBox,
  DescriptionBox,
} from "../../design/detailPage/LiquorInformationStyles";
import { mainRed } from "../../design/colorPalette";
import { AddWishList, AddDoneList } from "./widget/WishListButtons";

const liquorRatingMessage = {
  1: "매니아들만 찾아요.",
  2: "호불호가 갈려요.",
  3: "평범해요!",
  4: "대부분 좋아해요.",
  5: "이 술 싫어하는 사람을 본적이 없어요!",
};

//TODO 유저 상태에 따라 버튼 표시 다르게하기
export function LiquorInformation({ liquor }) {
  let liquorRating = Math.round(liquor.rating);
  return (
    <>
      <LiquorBox>
        <div>
          <img src={liquor.img} alt="liquor" />
        </div>
        <RatingBox>
          <span className="rating">{liquor.rating}</span>
          <p>" {liquorRatingMessage[liquorRating]} "</p>
          <Rating
            sx={{ color: `${mainRed}` }}
            name="half-rating-read"
            defaultValue={liquor.rating}
            precision={0.5}
            icon={<FavoriteIcon />}
            emptyIcon={<FavoriteBorderIcon />}
            readOnly
          />

          <AddWishList value={liquor.wishCount} />
          <AddDoneList value={liquor.doneCount} />
        </RatingBox>
      </LiquorBox>
      <DescriptionBox>
        <span className="name">
          {liquor.name} · {liquor.classfication}
        </span>
        <span>{liquor.description}</span>
      </DescriptionBox>
    </>
  );
}

export default LiquorInformation;
