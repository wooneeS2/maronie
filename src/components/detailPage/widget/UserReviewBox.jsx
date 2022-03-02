import React from "react";
import { mainOrange, mainYellowLight } from "../../../design/colorPalette";
import { CenterAlignmentDiv } from "../../../design/commonStyles";

export const UserReviewBox = ({ userReview }) => {
  return (
    <CenterAlignmentDiv
      style={{ textAlign: "start", padding: "6px", margin: "6px" }}
    >
      <div
        id="reviewBox"
        style={{
          borderRadius: "0.5rem",
          padding: "20px",
          lineHeight: "1.5rem",
          boxShadow:
            " rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
        }}
      >
        <div>
          <span
            style={{
              backgroundColor: `${mainYellowLight}`,
              borderRadius: "1rem",
              display: "inline-flex",
              paddingLeft: "4px",
              paddingRight: "4px",
              fontSize: "0.8rem",
            }}
            id="userRating"
          >
            ★{userReview.userRating}
          </span>
          <span
            id="reviewContent"
            style={{ padding: "4px", wordBreak: "keep-all" }}
          >
            {userReview.reviewContent}
          </span>
        </div>
      </div>
      <div style={{ padding: "4px" }}>
        <span
          id="reviewUser"
          style={{
            color: `${mainOrange}`,
            fontWeight: "bold",
            fontSize: "0.9rem",
            padding: "4px",
          }}
        >
          {userReview.userName}
        </span>
        <span
          style={{
            color: "grey",
            fontSize: "0.8rem",
            padding: "4px",
          }}
        >
          {userReview.reviewDate}
        </span>
      </div>
    </CenterAlignmentDiv>
  );
};

export default UserReviewBox;
