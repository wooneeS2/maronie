import { Rating } from "@mui/material";
import {
  ReviewItemThumbnail,
  ReviewItemsWrapper,
} from "../../design/AuthPage/ReviewPageStyles";
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
  return (
    <ReviewItemsWrapper>
      {obj.map((item) => (
        <StyledLink
          to={`/${currentTab}/` + item[`${currentTab}_id`]}
          id={`${currentTab}-` + item[`${currentTab}_id`]}
        >
          <div
            style={{
              borderRadius: "5px",
              margin: "10px",
              padding: "10px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 1px 10px 0px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              width: "60vw",
            }}
          >
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
              style={{ position: "absolute", right: 5, top: 5 }}
              onClick={(e) => {
                e.preventDefault();
                handleConfirm();
              }}
            />
            <div style={{ padding: "5px" }}>
              <Rating value={item["rating"]} readOnly />
              <p style={{ fontSize: "1.1rem" }}>{item[`content`]}</p>
            </div>
          </div>
        </StyledLink>
      ))}
    </ReviewItemsWrapper>
  );
}
export default ReviewItems;
