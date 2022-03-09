import React from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "../../data/state";
import { IoTrashOutline } from "react-icons/io5";
import {
  WishItemsContainer,
  WishItemsImage,
} from "../../design/AuthPage/WishlistPageStyles";
import { StyledLink } from "../../design/CommonStyles";
function WishItems({ currentTab, list, page }) {
  const [user, setUser] = useRecoilState(userState);
  const handleDelete = async (e, id) => {
    e.stopPropagation();
    if (window.confirm("정말 삭제하시겠습니까?")) {
      await axios
        .delete(
          process.env.REACT_APP_DB_HOST +
            `mypage/${page}/delete/${user["id"]}/${currentTab}/${id}`
        )
        .then(() => alert("삭제 성공!"))
        .catch(() => alert("오류가 발생했습니다, 잠시후에 다시 시도해주세요!"));
    }
  };

  if (list.length === 0) {
    // TODO 결과 없음 컴포넌트 삽입 예정
    return <div>없어</div>;
  }
  return (
    <WishItemsContainer>
      {list.map((item) => (
        <div
          style={{
            borderRadius: "5px",
            textAlign: "center",
            margin: "10px",
            padding: "10px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 1px 10px 0px",
          }}
        >
          <div style={{ position: "relative" }}>
            <IoTrashOutline
              size={20}
              style={{ position: "absolute", right: 13, top: 13 }}
              onClick={(e) => {
                handleDelete(e, item[`${currentTab}_id`]);
              }}
            />
          </div>

          <StyledLink to={`/${currentTab}/` + item[`${currentTab}_id`]}>
            <WishItemsImage
              src={item["image_path"]}
              alt={item[`${currentTab}_name_kor`] + " 이미지"}
            />
          </StyledLink>
          <StyledLink to={`/${currentTab}/` + item[`${currentTab}_id`]}>
            <p style={{ fontWeight: 600, fontSize: "1.1rem" }}>
              {item[`${currentTab}_name_kor`]}
            </p>
          </StyledLink>
        </div>
      ))}
    </WishItemsContainer>
  );
}
export default WishItems;
