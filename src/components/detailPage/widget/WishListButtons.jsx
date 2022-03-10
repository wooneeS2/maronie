import React from "react";
import styled from "styled-components";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LocalBarOutlinedIcon from "@mui/icons-material/LocalBarOutlined";
import { Chip } from "@mui/material";
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

export const ButtonBox = styled.button`
  display: flex;
  width: 100%;
  min-width: 250px;
  padding: 5px;
  margin: 0 auto;
  margin-top: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  text-align: center;
  justify-content: space-between;
  border: 0;
  outline: 0;
  background-color: white;
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

const url = process.env.REACT_APP_DB_HOST;

export const AddWishList = ({ wishCount, itemId, type }) => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);
  const whatType = type === "liquor" ? "liquor" : "cocktail";

  const postData = {
    user_id: user.id,
    [whatType + "_id"]: itemId,
  };

  const deleteWishList = async () => {
    try {
      const deletewishList = await axios.delete(
        `${url}/mypage/wishlist/delete/${user.id}/${whatType}/${itemId}`
      );
      if (deletewishList.status == 200) {
        window.alert("즐겨찾기 해제되었습니다.");
      }
    } catch (error) {
      window.alert("즐겨찾기 해제 실패");
    }
  };

  const onClick = async () => {
    const patch = await axios
      .post(`${url}mypage/wishlist/create/${whatType}`, postData)
      .catch(function (error) {
        console.log(error.response.status);
        if (error.response.status == 409) {
          console.log("중복");
          deleteWishList();
        }
      });
    if (patch.status === 201) {
      window.alert("즐겨찾기에 등록되었습니다.");
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
  const [user, setUser] = useRecoilState(userState);
  const whatType = type === "liquor" ? "liquor" : "cocktail";

  const postData = {
    user_id: user.id,
    [whatType + "_id"]: itemId,
  };

  const deleteDoneList = async () => {
    try {
      const deleteDoneList = await axios.delete(
        `${url}/mypage/donelist/delete/${user.id}/${whatType}/${itemId}`
      );
      if (deleteDoneList.status == 200) {
        window.alert("마셔봤어요 해제되었습니다.");
      }
    } catch (error) {
      window.alert("마셔봤어요 해제 실패");
    }
  };

  const onClick = async () => {
    const patch = await axios
      .post(`${url}mypage/donelist/create/${whatType}`, postData)
      .catch(function (error) {
        console.log(error.response.status);
        if (error.response.status == 409) {
          deleteDoneList();
        }
      });
    try {
      if (patch.status === 201) {
        window.alert("마셔봤어요에 등록되었습니다.");
      }
    } catch (error) {
      console.log(error);
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
  return (
    <StyledLink to="/cocktail/register">
      <ButtonBox>
        <RowDiv>
          <AddBoxOutlinedIcon />
          <span>칵테일 레시피 추가하기 </span>
        </RowDiv>
      </ButtonBox>
    </StyledLink>
  );
};
