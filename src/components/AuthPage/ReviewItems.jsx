import React from "react";
import axios from "axios";
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
function ReviewItems({ list }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [user, setUser] = useRecoilState(userState);

  const handleDelete = async (e, liquorId) => {
    e.stopPropagation();
    if (window.confirm("정말 삭제하시겠습니까?")) {
      await axios
        .delete(
          process.env.REACT_APP_DB_HOST +
            `review/delete/${user["id"]}/cocktail/${liquorId}`
        )
        .then(() => alert("삭제 성공!"))
        .catch(() => alert("오류가 발생했습니다, 잠시후에 다시 시도해주세요!"));
    }
  };

  const handleCorrection = (e) => {
    e.stopPropagation();
    alert("수정");
  };
  if (list.length > 0) {
    return (
      <>
        <ReviewItemsContainer>
          {list.map((item) => (
            <ReviewItemWrapper>
              <div style={{ position: "absolute", right: 13, top: 13 }}>
                <BsPencilSquare
                  size={20}
                  style={{ padding: "5px" }}
                  onClick={(e) => {
                    handleCorrection(e);
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
                  to={`/cocktail/` + item[`cocktail_id`]}
                  key={`cocktail-` + item[`cocktail_id`]}
                >
                  {" "}
                </StyledLink>
                <ReviewItemThumbnail
                  src={item["image_path"]}
                  alt={item[`cocktail_name_kor`] + " 이미지"}
                />
                <div>
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      marginBottom: 0,
                    }}
                  >
                    {item[`cocktail_name_kor`]}
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
    return <p>리뷰 업써</p>;
  }
}
export default ReviewItems;
