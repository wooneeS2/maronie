import React from "react";
import { ButtonBox, ButtonTitle } from "design/detailPage/ButtonBox";
import StarIcon from "@mui/icons-material/Star";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import { RowDiv } from "../../../design/commonStyles";
import { mainRed, mainYellowDark } from "../../../design/colorPalette";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ChipButton } from "design/detailPage/ButtonBox";

export function DeleteWishList({ type, wishCount, onClick }) {
  return (
    <>
      <ButtonBox onClick={onClick}>
        <RowDiv>
          <StarIcon style={{ fill: `${mainYellowDark}` }} />
          <ButtonTitle>즐겨찾기 등록 완료</ButtonTitle>
        </RowDiv>
        <ChipButton
          label={`${wishCount}명`}
          avatar={<FavoriteIcon style={{ color: `${mainRed}` }} />}
        />
      </ButtonBox>
    </>
  );
}

export function DeleteDoneList({ doneCount, onClick }) {
  return (
    <ButtonBox onClick={onClick}>
      <RowDiv>
        <LocalBarIcon style={{ fill: `${mainYellowDark}` }} />
        <ButtonTitle>마셔봤어요 등록 완료</ButtonTitle>
      </RowDiv>
      <ChipButton
        label={`${doneCount}명`}
        avatar={<CheckCircleIcon style={{ color: `${mainRed}` }} />}
      />
    </ButtonBox>
  );
}
