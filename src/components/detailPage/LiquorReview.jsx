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
import { useRecoilState } from "recoil";
import { userState } from "data/state";
import axios from "axios";

const GET_API = process.env.REACT_APP_DB_HOST;

export function LiquorReview({
  reviewSummary,
  liquorReviews,
  liquorId,
  liquorImg,
  liquorName,
  liquorRating,
}) {
  const navigate = useNavigate();
  const [user] = useRecoilState(userState);
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const [liquorRatingValue, setLiquorRatingValue] = React.useState(null);
  const [liquorReviewList, setLiquorReviewList] = React.useState(liquorReviews);
  const [lastReviewId, setLastReviewId] = React.useState(0);
  let ratings = reviewSummary.rating_distribution;

  React.useEffect(() => {
    setLiquorRatingValue(liquorRating);
    setLiquorReviewList(liquorReviews);
    setLastReviewId(reviewSummary.last_review_id);
  }, [ratings]);

  let ratingsWithNewType = [];
  if (reviewSummary.rating_distribution) {
    const keys = Object.keys(ratings);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = ratings[key];
      ratingsWithNewType.push({ rating: keys.length - i, count: value });
    }
  }

  return (
    <>
      <div id="liquorReview" style={{ paddingTop: "2rem" }}>
        <ColumnDiv>
          <PageTitle>유저 리뷰</PageTitle>

          <CenterAlignmentDiv>
            {liquorRating && liquorRating.toFixed(2)}
          </CenterAlignmentDiv>
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
            {ratingsWithNewType.map((i, index) => {
              return <RatingChartBar key={i + index} ratingCount={i} />;
            })}
          </ColumnDiv>

          {liquorReviewList && (
            <div>
              <HorizontalLine style={{ width: "60%", marginTop: "1rem" }} />
              {liquorReviewList.map((i, index) => {
                return (
                  <UserReviewBox key={i.nickname + index} userReview={i} />
                );
              })}
            </div>
          )}
        </ColumnDiv>

        <MoreReviewButton
          onClick={async () => {
            if (lastReviewId === null) {
              return setLiquorReviewList([...liquorReviewList]);
            }
            try {
              const response = await axios.get(
                `${GET_API}review/liquor/${liquorId}/more_reviews/${lastReviewId}`
              );

              const moreReviews = response.data.reviews;
              const lastId = response.data.last_review_id;
              setLastReviewId(lastId);
              setLiquorReviewList([...liquorReviewList, ...moreReviews]);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          리뷰 더 보기
        </MoreReviewButton>

        <CenterAlignmentDiv style={{ marginBottom: "1rem", marginTop: "1rem" }}>
          <BoldTitle>
            이 술, {user ? user.nickname : "회원"}님은 어땠나요?
          </BoldTitle>
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
