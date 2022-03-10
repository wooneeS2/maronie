import React from "react";
import ReviewRegistration from "../components/reviewRegistation/ReviewRegistration";

function ReviewRegistrationPage({ image, liqourName }) {
  return (
    <ReviewRegistration
      image={
        "https://d1e2y5wc27crnp.cloudfront.net/media/smartorder_reservation/product_detail/ef845bd4-215a-4e10-99da-4fdb85ce8aef.png"
      }
      liqourName={"엑스레이티드"}
    />
  );
}

export default ReviewRegistrationPage;
