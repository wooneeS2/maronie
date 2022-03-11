import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../data/state";
import { Rating } from "@mui/material";
import {
  ReviewItemThumbnail,
  ReviewItemsContainer,
  ReviewItemWrapper,
} from "../../design/AuthPage/MyReviewPageStyles";
import { StyledLink } from "../../design/commonStyles";
import { BsPencilSquare } from "react-icons/bs";
import { IoTrashOutline } from "react-icons/io5";
import NoItem from "./NoItem";
function ReviewItems({ reviewData, setReviewData }) {
  console.log(reviewData);
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [user, setUser] = useRecoilState(userState);
  console.log(reviewData);
  const handleDelete = async (e, reviewId) => {
    e.stopPropagation();
    if (window.confirm("정말 삭제하시겠습니까?")) {
      await axios
        .delete(
          process.env.REACT_APP_DB_HOST +
            `review/delete/${reviewId}/user/${user["id"]}`
        )
        .then(() => {
          alert("삭제 성공!");
          let newReviewData = reviewData.filter(
            (item) => item["review_id"] !== reviewId
          );
          setReviewData(newReviewData);
        })
        .catch(() => alert("오류가 발생했습니다, 잠시후에 다시 시도해주세요!"));
    }
  };

  const handleEdit = (e, reviewId) => {
    e.stopPropagation();
    navigate(`edit/${reviewId}`);
  };
  if (reviewData.length > 0) {
    return (
      <>
        <ReviewItemsContainer>
          {reviewData.map((item) => (
            <ReviewItemWrapper>
              <div style={{ position: "absolute", right: 13, top: 13 }}>
                <BsPencilSquare
                  size={20}
                  style={{ padding: "5px" }}
                  onClick={(e) => {
                    handleEdit(e, item["review_id"]);
                  }}
                />
                <IoTrashOutline
                  size={20}
                  style={{ padding: "5px" }}
                  onClick={(e) => {
                    handleDelete(e, item["review_id"]);
                  }}
                />
              </div>

              <div style={{ display: "flex", borderBottom: "1px solid #ddd" }}>
                <StyledLink
                  to={`/review/` + item[`review_id`]}
                  key={`review-` + item[`review_id`]}
                >
                  {/* <ReviewItemThumbnail
                    src={process.env.REACT_APP_DB_IMG + item["image_path"]}
                    alt={item[`liquor_name_kor`] + " 이미지"}
                  /> */}
                </StyledLink>
                <div>
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      marginBottom: 0,
                    }}
                  >
                    {item[`liquor_name_kor`]}
                  </p>
                  <p style={{ marginTop: "5px" }}>{item[`post_date`]}</p>
                </div>
              </div>
              <div style={{ padding: "10px" }}>
                <Rating value={item["rating"]} readOnly />
                <p style={{ fontSize: "1.1rem" }}>{item[`content`]}</p>
              </div>
            </ReviewItemWrapper>
          ))}
        </ReviewItemsContainer>
      </>
    );
  } else {
    return <NoItem page="review" />;
  }
}
export default ReviewItems;
