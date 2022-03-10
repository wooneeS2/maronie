import React from "react";
import { useParams } from "react-router-dom";
import ReviewEdit from "components/MyPage/ReviewEdit";
function ReviewEditPage() {
  const { reviewId } = useParams();
  return <ReviewEdit reviewId={reviewId} />;
}

export default ReviewEditPage;
