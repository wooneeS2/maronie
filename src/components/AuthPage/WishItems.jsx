import React from "react";
import {
  WishItemsContainer,
  WishItemsImage,
} from "../../design/AuthPage/WishlistPageStyles";
import { StyledLink } from "../../design/CommonStyles";
function WishItems({ currentTab, obj }) {
  return (
    <WishItemsContainer>
      {obj.map((item) => (
        <div
          style={{
            borderRadius: "5px",
            textAlign: "center",
            margin: "10px",
            padding: "10px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 1px 10px 0px",
          }}
        >
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
