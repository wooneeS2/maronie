import React from "react";
import { mainOrange, mainYellowLight } from "../../design/colorPalette";
import { CenterAlignmentDiv } from "../../design/commonStyles";

export const UserReviewBox = ({ userReview }) => {
  return (
    <CenterAlignmentDiv style={{ textAlign: "start" }}>
      <div
        id="reviewBox"
        style={{
          borderRadius: "0.5rem",
          padding: "0.8rem",

          lineHeight: "1.5rem",
          boxShadow:
            " rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
        }}
      >
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
        <div id="reviewContent">{userReview.reviewContent}</div>
      </div>
      <div style={{ marginBottom: "10px", marginTop: "5px" }}>
        <span
          id="reviewUser"
          style={{
            color: `${mainOrange}`,
            fontWeight: "bold",
            fontSize: "0.9rem",
            display: "flex",
          }}
        >
          {userReview.userName}
        </span>
        <span
          style={{
            color: "grey",
            fontSize: "0.8rem",
          }}
        >
          {userReview.reviewDate}
        </span>
      </div>
    </CenterAlignmentDiv>
  );
};

export default UserReviewBox;
