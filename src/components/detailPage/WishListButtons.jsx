import React from "react";
import styled from "styled-components";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LocalBarOutlinedIcon from "@mui/icons-material/LocalBarOutlined";

export const ButtonBox = styled.div`
  display: flex;
  padding: 0.2rem;
  margin: 0.4rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  text-align: center;
  span {
    margin-left: 10px;
  }
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;

export const AddWishList = () => {
  return (
    <ButtonBox>
      <StarBorderOutlinedIcon />
      <span>즐겨찾기 </span>
    </ButtonBox>
  );
};
export const AddDoneList = () => {
  return (
    <ButtonBox>
      <LocalBarOutlinedIcon />
      <span>마셔봤어요 </span>
    </ButtonBox>
  );
};
