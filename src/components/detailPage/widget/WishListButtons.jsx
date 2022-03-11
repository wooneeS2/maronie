import React from "react";
import {
  ButtonBox,
  ChipButton,
  ButtonTitle,
} from "design/detailPage/ButtonBox";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LocalBarOutlinedIcon from "@mui/icons-material/LocalBarOutlined";
import { RowDiv } from "../../../design/commonStyles";
import { mainRed } from "../../../design/colorPalette";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { StyledLink } from "design/commonStyles";
import { useRecoilState } from "recoil";
import { userState } from "data/state";

export const AddWishList = ({ wishCount, onClick }) => {
  return (
    <ButtonBox onClick={onClick}>
      <RowDiv>
        <StarBorderOutlinedIcon />
        <ButtonTitle>즐겨찾기 </ButtonTitle>
      </RowDiv>
      <ChipButton
        label={`${wishCount}명`}
        avatar={<FavoriteIcon style={{ color: `${mainRed}` }} />}
      />
    </ButtonBox>
  );
};

export const AddDoneList = ({ doneCount, onClick }) => {
  return (
    <ButtonBox onClick={onClick}>
      <RowDiv>
        <LocalBarOutlinedIcon />
        <ButtonTitle>마셔봤어요 </ButtonTitle>
      </RowDiv>
      <ChipButton
        label={`${doneCount}명`}
        avatar={<CheckCircleIcon style={{ color: `${mainRed}` }} />}
      />
    </ButtonBox>
  );
};

export const AddRecipeButton = () => {
  const [user] = useRecoilState(userState);
  const userId = user ? user.id : 0;
  return (
    <StyledLink to={userId === 0 ? "/signin" : "/cocktail/register"}>
      <ButtonBox>
        <RowDiv>
          <AddBoxOutlinedIcon />
          <ButtonTitle>칵테일 레시피 추가하기 </ButtonTitle>
        </RowDiv>
      </ButtonBox>
    </StyledLink>
  );
};
