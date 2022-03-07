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
  liquorReviews,
  liquorId,
  liquorImg,
  liquorName,
}) {
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const navigate = useNavigate();

  return (
    <>
      <div id="liquorReview">
        <ColumnDiv>
          <PageTitle>유저 리뷰</PageTitle>

          <CenterAlignmentDiv>
            {liquorReviews[0].liquorRating}
          </CenterAlignmentDiv>
          <CenterAlignmentDiv>
            <ReadOnlyRating
              ratingValue={liquorReviews[0].liquorRating}
              fontSize={"1rem"}
            />
          </CenterAlignmentDiv>
          <CenterAlignmentDiv style={grayFontStyle}>
            234개의 후기
          </CenterAlignmentDiv>

          <ColumnDiv>
            {ratingCount
              .slice(0)
              .reverse()
              .map((i, index) => {
                return <RatingChartBar key={i + index} ratingCount={i} />;
              })}
          </ColumnDiv>
          <HorizontalLine style={{ width: "60%", marginTop: "1rem" }} />
        </ColumnDiv>
        {liquorReviews.map((i, index) => {
          return <UserReviewBox key={i.userName + index} userReview={i} />;
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
