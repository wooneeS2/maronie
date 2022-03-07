import React from "react";
import ReviewRegistration from "../components/reviewRegistation/ReviewRegistration";
import { useLocation } from "react-router-dom";

function ReviewRegistrationPage() {
  const location = useLocation();

  return (
    <ReviewRegistration
      liquorImage={location.state.liquorImg}
      liqourName={location.state.liquorName}
      liquorId={parseInt(location.state.liquorId)}
    />
  );
}

export default ReviewRegistrationPage;
