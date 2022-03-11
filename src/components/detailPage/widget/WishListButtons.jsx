import React from "react";
import { ButtonBox, ChipButton } from "design/detailPage/ButtonBox";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LocalBarOutlinedIcon from "@mui/icons-material/LocalBarOutlined";
import { RowDiv } from "../../../design/commonStyles";
import { mainRed } from "../../../design/colorPalette";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { StyledLink } from "design/commonStyles";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "data/state";
import { useNavigate } from "react-router-dom";

const url = process.env.REACT_APP_DB_HOST;

export const AddWishList = ({ wishCount, itemId, type }) => {
  const [user] = useRecoilState(userState);
  const userId = user ? user.id : 0;
  const navigate = useNavigate();
  const whatType = type === "liquor" ? "liquor" : "cocktail";

  const postData = {
    user_id: userId,
    [whatType + "_id"]: itemId,
  };

  const onClick = async () => {
    if (userId === 0) {
      navigate("/signin");
    }
    try {
      const patch = await axios.post(
        `${url}mypage/wishlist/create/${whatType}`,
        postData
      );

      if (patch.status === 201) {
        window.alert("즐겨찾기에 등록되었습니다.");
      }
      if (patch.status === 200) {
        window.alert("이미 즐겨찾기에 등록되었습니다.");
      }
    } catch (error) {
      window.alert("즐겨찾기 등록 실패");
    }
  };
  return (
    <ButtonBox onClick={onClick}>
      <RowDiv>
        <StarBorderOutlinedIcon />
        <span>즐겨찾기 </span>
      </RowDiv>
      <ChipButton
        label={`${wishCount}명`}
        avatar={<FavoriteIcon style={{ color: `${mainRed}` }} />}
      />
    </ButtonBox>
  );
};

export const AddDoneList = ({ doneCount, itemId, type }) => {
  const navigate = useNavigate();
  const [user] = useRecoilState(userState);
  const userId = user ? user.id : 0;

  const whatType = type === "liquor" ? "liquor" : "cocktail";

  const postData = {
    user_id: userId,
    [whatType + "_id"]: itemId,
  };

  const onClick = async () => {
    if (userId === 0) {
      navigate("/signin");
    }
    try {
      const patch = await axios.post(
        `${url}mypage/donelist/create/${whatType}`,
        postData
      );
      if (patch.status === 201) {
        window.alert("마셔봤어요에 등록되었습니다.");
      }
      if (patch.status === 200) {
        window.alert("이미 마셔봤어요에 등록되었습니다.");
      }
    } catch (error) {
      window.alert("마셔봤어요 등록 실패");
    }
  };

  return (
    <ButtonBox onClick={onClick}>
      <RowDiv>
        <LocalBarOutlinedIcon />
        <span>마셔봤어요 </span>
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
          <span>칵테일 레시피 추가하기 </span>
        </RowDiv>
      </ButtonBox>
    </StyledLink>
  );
};
