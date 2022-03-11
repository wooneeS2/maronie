import React from "react";
import { ButtonBox } from "design/detailPage/ButtonBox";
import StarIcon from "@mui/icons-material/Star";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import { RowDiv } from "../../../design/commonStyles";
import { mainRed, mainYellowDark } from "../../../design/colorPalette";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ChipButton } from "design/detailPage/ButtonBox";

import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "data/state";
import { useNavigate } from "react-router-dom";

const url = process.env.REACT_APP_DB_HOST;

export function DeleteWishList({ itemId, type }) {
  const whatType = type === "liquor" ? "liquor" : "cocktail";

  const [user] = useRecoilState(userState);
  const userId = user ? user.id : 0;

  const onClick = async () => {
    try {
      const patch = await axios.delete(
        `${url}mypage/wishlist/delete/${user.id}/${whatType}/${itemId}`
      );

      if (patch.status === 200) {
        window.alert("즐겨찾기 해제 되었습니다.");
      }
    } catch (error) {
      window.alert("즐겨찾기 해제 실패");
    }
  };
  return (
    <>
      <ButtonBox onClick={onClick}>
        <RowDiv>
          <StarIcon color="yellow.dark" />
          <span>즐겨찾기 등록 완료 </span>
        </RowDiv>
        <ChipButton
          //   label={`${wishCount}명`}
          avatar={<FavoriteIcon style={{ color: `${mainRed}` }} />}
        />
      </ButtonBox>
    </>
  );
}

export function DeleteDoneList({ itemId, type }) {
  const whatType = type === "liquor" ? "liquor" : "cocktail";

  const [user] = useRecoilState(userState);
  const userId = user ? user.id : 0;

  const onClick = async () => {
    try {
      const patch = await axios.delete(
        `${url}mypage/donelist/delete/${user.id}/${whatType}/${itemId}`
      );

      if (patch.status === 200) {
        window.alert("즐겨찾기 해제 되었습니다.");
      }
    } catch (error) {
      window.alert("즐겨찾기 해제 실패");
    }
  };
  return (
    <ButtonBox onClick={onClick}>
      <RowDiv>
        <LocalBarIcon color="yellow.dark" />
        <span>마셔봤어요 </span>
      </RowDiv>
      <ChipButton
        // label={`${doneCount}명`}
        avatar={<CheckCircleIcon style={{ color: `${mainRed}` }} />}
      />
    </ButtonBox>
  );
}
