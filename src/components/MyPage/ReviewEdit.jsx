import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../data/state";
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
import { Navigate } from "react-router-dom";

function ReviewEdit({ reviewId }) {
  let navigate = useNavigate();
  const [hover, setHover] = React.useState(-1);
  const [isLoading, setIsLoading] = React.useState(false);
  const [user, setUser] = useRecoilState(userState);
  const [review, setReview] = React.useState({});
  const [liquor, setLiquor] = React.useState({});
  const [value, setValue] = React.useState();
  const [reviewContent, setReviewContent] = React.useState(
    review["content"] || ""
  );
  const submitEdit = async () => {
    await axios
      .post(process.env.REACT_APP_DB_HOST + `review/update`, {
        review_id: reviewId,
        user_id: user["id"],
        rating: value,
        content: reviewContent,
      })
      .then(() => {
        alert("리뷰가 수정되었습니다!");
        navigate(-1);
      })
      .catch(() => alert("오류가 발생했습니다, 잠시 뒤에 다시 시도해주세요!"));
  };
  React.useEffect(() => {
    setIsLoading(true);
    const call = async () => {
      const reviewInfo = await axios
        .get(
          process.env.REACT_APP_DB_HOST +
            `review/${reviewId}/user/${user["id"]}`
        )
        .then((res) => res.data);
      const liquorInfo = await axios
        .get(
          process.env.REACT_APP_DB_HOST + `liquor/${reviewInfo["liquor_id"]}`
        )
        .then((res) => res.data);
      setReview(reviewInfo);
      setLiquor(liquorInfo);
      setIsLoading(false);
    };
    call();
  }, []);
  return (
    <>
      <ColumnDiv style={{ paddingTop: "81px" }}>
        <div>
          <ImgWrapper>
            <img
              src={liquor["liquor_image"]}
              alt={`${liquor["liquor_name_kor"]} 이미지`}
              style={imageStyle}
            />
          </ImgWrapper>
          <BoldTitle>{liquor["liquor_name_kor"]}</BoldTitle>
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
            placeholder="술에 대한 후기를 남겨주세요. 술의 맛, 느낌, 분위기, 가격대 등 어떤 내용이라도 좋아요!"
            defaultValue={review["content"]}
            onChange={(e) => setReviewContent(e.target.value)}
          />
        </div>
        <CenterAlignmentDiv>
          <RegisterButton onClick={() => submitEdit()}>수정하기</RegisterButton>
        </CenterAlignmentDiv>
      </ColumnDiv>
    </>
  );
}

export default ReviewEdit;
