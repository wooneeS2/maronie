import React from "react";
import {
  RatingBox,
  DescriptionBox,
  LiquorDescription,
  LiquorName,
  LiquorRatingLabel,
} from "../../design/detailPage/LiquorInformationStyles";
import { ReadOnlyRating } from "./widget/ReviewRating";
import { AddWishList, AddDoneList } from "./widget/WishListButtons";
import { ImgWrapper, ColumnDiv } from "../../design/commonStyles";

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
      <ColumnDiv>
        <div>
          <ImgWrapper>
            <img src={liquor.img} alt="liquor" style={{ width: "80%" }} />
          </ImgWrapper>
        </div>
        <DescriptionBox>
          <LiquorName>
            {liquor.name} · {liquor.classfication}
          </LiquorName>
          <LiquorDescription>{liquor.description}</LiquorDescription>
        </DescriptionBox>
        <RatingBox>
          <LiquorName>{liquor.rating}</LiquorName>
          <LiquorRatingLabel>
            " {liquorRatingMessage[liquorRating]} "
          </LiquorRatingLabel>
          <ReadOnlyRating ratingValue={liquor.rating} fontSize={"2rem"} />
        </RatingBox>
        <ImgWrapper style={{ flexDirection: "column", marginBottom: "1rem" }}>
          <AddWishList value={liquor.wishCount} />
          <AddDoneList value={liquor.doneCount} />
        </ImgWrapper>
      </ColumnDiv>
    </>
  );
}

export default LiquorInformation;
