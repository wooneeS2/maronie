import React from "react";
import {
  PageTitle,
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
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url = process.env.REACT_APP_DB_HOST;

function ReviewRegistration({ liquorImage, liqourName, liquorId }) {
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const [reviewContent, setReviewContent] = React.useState("");
  const navigate = useNavigate();

  const postReview = async () => {
    try {
      const patch = await axios.post(`${url}review/create`, {
        user_id: 4,
        liquor_id: liquorId,
        rating: value,
        content: reviewContent,
      });
      if (patch.status === 201) {
        window.alert("리뷰 작성이 완료되었습니다.");
        navigate(-1);
      }
    } catch (error) {
      window.alert("리뷰 작성을 실패했습니다.");
    }
  };
  return (
    <>
      <PageTitle>리뷰를 남겨주세요!</PageTitle>
      <ColumnDiv>
        <div>
          <ImgWrapper>
            <img src={liquorImage} alt="liquor" style={imageStyle} />
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
            onChange={e => {
              setReviewContent(e.target.value);
            }}
          />
        </div>
        <CenterAlignmentDiv>
          <RegisterButton
            type="submit"
            onClick={() => {
              postReview();
            }}
          >
            등록하기
          </RegisterButton>
        </CenterAlignmentDiv>
      </ColumnDiv>
    </>
  );
}

export default ReviewRegistration;
