import { Rating } from "@mui/material";
import {
  ReviewItemThumbnail,
  ReviewItemsContainer,
  ReviewItemWrapper,
} from "../../design/AuthPage/MyReviewPageStyles";
import { StyledLink } from "../../design/CommonStyles";
import { IoMdClose } from "react-icons/io";
function ReviewItems({ currentTab, obj }) {
  const handleConfirm = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      alert("진짜 삭제");
    } else {
      alert("삭제 안됨");
    }
  };
  // TODO api 붙이고 나서 수정 필요할듯
  console.log(obj);
  return (
    <>
      <ReviewItemsContainer>
        {obj.map((item) => (
          <StyledLink
            to={`/${currentTab}/` + item[`${currentTab}_id`]}
            key={`${currentTab}-` + item[`${currentTab}_id`]}
          >
            <ReviewItemWrapper>
              <div style={{ display: "flex", borderBottom: "1px solid #ddd" }}>
                <ReviewItemThumbnail
                  src={item["image_path"]}
                  alt={item[`${currentTab}_name_kor`] + " 이미지"}
                />
                <div>
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      marginBottom: 0,
                    }}
                  >
                    {item[`${currentTab}_name_kor`]}
                  </p>
                  <p style={{ marginTop: "5px" }}>{item[`post_date`]}</p>
                </div>
              </div>
              <IoMdClose
                style={{ position: "absolute", right: 10, top: 10 }}
                onClick={(e) => {
                  e.preventDefault();
                  handleConfirm();
                }}
              />
              <div style={{ padding: "10px" }}>
                <Rating value={item["rating"]} readOnly />
                <p style={{ fontSize: "1.1rem" }}>{item[`content`]}</p>
              </div>
            </ReviewItemWrapper>
          </StyledLink>
        ))}
      </ReviewItemsContainer>
    </>
  );
}
export default ReviewItems;
