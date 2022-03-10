import React from "react";
import {
  ColumnDiv,
  PageTitle,
  CenterAlignmentDiv,
  HorizontalLine,
  BoldTitle,
} from "../../design/commonStyles";
import {
  grayFontStyle,
  MoreReviewButton,
} from "../../design/detailPage/LiquorReviewStyles";
import { ReadOnlyRating, ReviewRating } from "./widget/ReviewRating";
import ratingLabels from "../../data/ratingLabels";
import RatingChartBar from "./widget/RatingChartBar";
import UserReviewBox from "./widget/UserReviewBox";
import { useNavigate } from "react-router-dom";

const ratingCount = [
  { rating: 1, count: 10 },
  { rating: 2, count: 20 },
  { rating: 3, count: 50 },
  { rating: 4, count: 25 },
  { rating: 5, count: 15 },
];

export function LiquorReview({
  reviewSummary,
  liquorReviews,
  liquorId,
  liquorImg,
  liquorName,
  liquorRating,
}) {
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const navigate = useNavigate();
  let ratings = reviewSummary.rating_distribution;
  const [liquorRatingValue, setLiquorRatingValue] = React.useState(null);

  React.useEffect(() => {
    setLiquorRatingValue(liquorRating);
  }, [ratings]);

  let ratingsWithNewType = [];
  if (reviewSummary.rating_distribution) {
    const keys = Object.keys(ratings);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = ratings[key];
      ratingsWithNewType.push({ rating: i + 1, count: value });
    }
  }

  return (
    <>
      <div id="liquorReview">
        <ColumnDiv>
          <PageTitle>유저 리뷰</PageTitle>

          <CenterAlignmentDiv>{liquorRating}</CenterAlignmentDiv>
          <CenterAlignmentDiv>
            {liquorRatingValue && (
              <ReadOnlyRating
                ratingValue={parseFloat(liquorRating)}
                fontSize={"1rem"}
              />
            )}
          </CenterAlignmentDiv>
          <CenterAlignmentDiv style={grayFontStyle}>
            {reviewSummary.total_reviews}개의 후기
          </CenterAlignmentDiv>

          <ColumnDiv>
            {ratingsWithNewType
              .slice(0)
              .reverse()
              .map((i, index) => {
                return <RatingChartBar key={i + index} ratingCount={i} />;
              })}
          </ColumnDiv>
          <HorizontalLine style={{ width: "60%", marginTop: "1rem" }} />
        </ColumnDiv>
        {liquorReviews.map((i, index) => {
          return <UserReviewBox key={i.nickname + index} userReview={i} />;
        })}
        <MoreReviewButton>리뷰 더 보기</MoreReviewButton>
        <CenterAlignmentDiv style={{ marginBottom: "1rem" }}>
          <BoldTitle>이 술, 000님은 어땠나요?</BoldTitle>
          <div style={{ fontStyle: "italic" }}>
            {value !== null && (
              <p>〔 {ratingLabels[hover !== -1 ? hover : value]} 〕</p>
            )}
          </div>
          <ReviewRating
            onChange={(event, newValue) => {
              setValue(newValue);
              navigate("/liquor/create/review", {
                state: {
                  liquorId: liquorId,
                  ratingValue: newValue,
                  liquorImg: liquorImg,
                  liquorName: liquorName,
                },
              });
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
          />
        </CenterAlignmentDiv>
      </div>
    </>
  );
}

export default LiquorReview;
