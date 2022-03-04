import React from "react";
import {
  ColumnDiv,
  RegisterButton,
  CenterAlignmentDiv,
  BoldTitle,
  imageStyle,
  ImgWrapper,
} from "../../design/commonStyles";
import {
  RatingTitle,
  ReviewContent,
} from "../../design/detailPage/ReviewRegisterPageStyles";
import { ReviewRating } from "../detailPage/widget/ReviewRating";
import ratingLabels from "../../data/ratingLabels";

function ReviewRegistration({ image, liqourName }) {
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);

  return (
    <>
      <ColumnDiv>
        <div>
          <ImgWrapper>
            <img src={image} alt="liquor" style={imageStyle} />
          </ImgWrapper>
          <BoldTitle>{liqourName}</BoldTitle>
        </div>
        <div>
          <RatingTitle>
            {value !== null && (
              <span>{ratingLabels[hover !== -1 ? hover : value]} </span>
            )}
          </RatingTitle>
          <div>
            <ReviewRating
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
            />
          </div>

          <ReviewContent
            rows={6}
            aria-label="maximum height"
            placeholder="술에 대한 후기를 남겨주세요. 술의 맛, 느낌, 분위기, 가격대 등 어떤 내용이라도 좋아요!"
          />
        </div>
        <CenterAlignmentDiv>
          <RegisterButton type="submit">등록하기</RegisterButton>
        </CenterAlignmentDiv>
      </ColumnDiv>
    </>
  );
}

export default ReviewRegistration;
