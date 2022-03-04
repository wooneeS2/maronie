import React from "react";
import {
  WishItemsWrapper,
  WishItemsImage,
} from "../../design/AuthPage/WishlistPageStyles";
import { StyledLink } from "../../design/CommonStyles";
function WishItems({ currentTab, obj }) {
  return (
    <WishItemsWrapper>
      {obj.map((item) => (
        <div>
          <StyledLink to={`/${currentTab}/` + item[`${currentTab}_id`]}>
            <WishItemsImage
              src={item["image_path"]}
              alt={item[`${currentTab}_name_kor`] + " 이미지"}
            />
          </StyledLink>
          <StyledLink to={`/${currentTab}/` + item[`${currentTab}_id`]}>
            <p style={{ textAlign: "center" }}>
              {item[`${currentTab}_name_kor`]}
            </p>
          </StyledLink>
        </div>
      ))}
    </WishItemsWrapper>
  );
}
export default WishItems;
