import React from "react";
import {
  RatingBox,
  DescriptionBox,
  LiquorDescription,
  LiquorName,
  LiquorRatingLabel,
} from "../../design/detailPage/LiquorInformationStyles";
import { ReadOnlyRating } from "./widget/ReviewRating";
import {
  AddWishList,
  AddDoneList,
  AddRecipeButton,
} from "./widget/WishListButtons";
import { ImgWrapper, ColumnDiv } from "../../design/commonStyles";

const liquorRatingMessage = {
  1: "매니아들만 찾아요.",
  2: "호불호가 갈려요.",
  3: "평범해요!",
  4: "대부분 좋아해요.",
  5: "이 술 싫어하는 사람을 본적이 없어요!",
};

const liquorClassification = {
  1: "진",
  2: "럼",
  3: "위스키",
  4: "보드카",
  5: "데킬라",
  6: "리큐르",
  7: "진",
};

//TODO 유저 상태에 따라 버튼 표시 다르게하기
export function LiquorInformation({ liquor, liquorId }) {
  let liquorRating = Math.round(parseFloat(liquor.rating));

  if (liquor === null) {
    return null;
  }
  return (
    <>
      <ColumnDiv style={{ paddingTop: "80px" }}>
        <div>
          <ImgWrapper>
            <img
              src={liquor.liquor_image}
              alt="liquor"
              style={{ width: "80%" }}
            />
          </ImgWrapper>
        </div>
        <DescriptionBox>
          <LiquorName>
            {liquor.liquor_name_kor} ·{" "}
            {liquorClassification[liquor.classification_id]}
          </LiquorName>
          <LiquorDescription>{liquor.description}</LiquorDescription>
        </DescriptionBox>
        <RatingBox>
          {liquor.rating && <LiquorName>{liquor.rating.toFixed(1)}</LiquorName>}
          <LiquorRatingLabel>
            " {liquorRatingMessage[liquorRating]} "
          </LiquorRatingLabel>
          {liquor.rating && (
            <ReadOnlyRating
              ratingValue={parseFloat(liquor.rating)}
              fontSize={"2rem"}
            />
          )}
        </RatingBox>
        <ImgWrapper style={{ flexDirection: "column", marginBottom: "1rem" }}>
          <AddWishList
            wishCount={liquor.total_bookmark}
            type="liquor"
            itemId={liquorId}
          />
          <AddDoneList
            doneCount={liquor.total_bookmark}
            type="liquor"
            itemId={liquorId}
          />
          <AddRecipeButton />
        </ImgWrapper>
      </ColumnDiv>
    </>
  );
}

export default LiquorInformation;
