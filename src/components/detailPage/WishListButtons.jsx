import React from "react";
import styled from "styled-components";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LocalBarOutlinedIcon from "@mui/icons-material/LocalBarOutlined";
import { Chip } from "@mui/material";
import { RowDiv } from "../../design/commonStyles";
import { mainOrange, mainRed } from "../../design/colorPalette";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const ButtonBox = styled.div`
  display: flex;
  padding: 0.2rem;
  margin: 0.4rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  text-align: center;
  justify-content: space-between;
  span {
    margin-left: 10px;
  }
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;

const ChipButton = ({ label, avatar }) => {
  return <Chip label={label} variant="outlined" avatar={avatar} />;
};

export const AddWishList = ({ value }) => {
  return (
    <ButtonBox>
      <RowDiv>
        <StarBorderOutlinedIcon />
        <span>즐겨찾기 </span>
      </RowDiv>
      <ChipButton
        label={`${value}명`}
        avatar={<FavoriteIcon style={{ color: `${mainRed}` }} />}
      />
    </ButtonBox>
  );
};
export const AddDoneList = ({ value }) => {
  return (
    <ButtonBox>
      <RowDiv>
        <LocalBarOutlinedIcon />
        <span>마셔봤어요 </span>
      </RowDiv>
      <ChipButton
        label={`${value}명`}
        avatar={<CheckCircleIcon style={{ color: `${mainRed}` }} />}
      />
    </ButtonBox>
  );
};
