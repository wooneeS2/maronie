import React from "react";
import {
  RatingBox,
  DescriptionBox,
  LiquorDescription,
  LiquorName,
  LiquorRatingLabel,
} from "../../design/detailPage/LiquorInformationStyles";
import { ReadOnlyRating } from "./widget/ReviewRating";
import {
  AddWishList,
  AddDoneList,
  AddRecipeButton,
} from "./widget/WishListButtons";
import { ImgWrapper, ColumnDiv } from "../../design/commonStyles";
import { DeleteWishList, DeleteDoneList } from "./widget/deleteButtons";
import { useRecoilState } from "recoil";
import { userState } from "data/state";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const liquorRatingMessage = {
  1: "매니아들만 찾아요.",
  2: "호불호가 갈려요.",
  3: "평범해요!",
  4: "대부분 좋아해요.",
  5: "이 술 싫어하는 사람을 본적이 없어요!",
};

const liquorClassification = {
  1: "진",
  2: "럼",
  3: "위스키",
  4: "보드카",
  5: "데킬라",
  6: "리큐르",
  7: "진",
};
const url = process.env.REACT_APP_DB_HOST;
const imgUrl = process.env.REACT_APP_DB_IMG;

export function LiquorInformation({ liquor, liquorId }) {
  let liquorRating = Math.round(parseFloat(liquor.rating));
  const [user] = useRecoilState(userState);
  const [isWish, setIsWish] = React.useState(0);
  const [isDone, setIsDone] = React.useState(0);
  const navigate = useNavigate();
  let userId = user ? user.id : 0;

  const getLiquorInformation = async () => {
    const response = await axios.get(
      `${url}/liquor/check_mark?user_id=${userId}&beverage_id=${liquorId}`
    );
    setIsWish(response.data.is_wish);
    setIsDone(response.data.is_done);
  };

  if (liquor === null) {
    return null;
  }
  return (
    <>
      <ColumnDiv style={{ paddingTop: "80px" }}>
        <div>
          <ImgWrapper>
            <img
              src={imgUrl + liquor.liquor_image}
              alt="liquor"
              style={{ width: "80%" }}
            />
          </ImgWrapper>
        </div>
        <DescriptionBox>
          <LiquorName>
            {liquor.liquor_name_kor} ·{" "}
            {liquorClassification[liquor.classification_id]}
          </LiquorName>
          <LiquorDescription>
            <span>
              도수 : {liquor.alcohol == -1 ? "알 수 없음" : liquor.alcohol}
            </span>
            {liquor.description}
          </LiquorDescription>
        </DescriptionBox>
        <RatingBox>
          {liquor.rating && <LiquorName>{liquor.rating.toFixed(1)}</LiquorName>}
          <LiquorRatingLabel>
            " {liquorRatingMessage[liquorRating]} "
          </LiquorRatingLabel>
          {liquor.rating && (
            <ReadOnlyRating
              ratingValue={parseFloat(liquor.rating)}
              fontSize={"2rem"}
            />
          )}
        </RatingBox>
        <ImgWrapper style={{ flexDirection: "column", marginBottom: "1rem" }}>
          {Boolean(isWish) ? (
            <DeleteWishList
              type="liquor"
              itemId={isWish}
              wishCount={liquor.total_bookmark}
              onClick={async () => {
                try {
                  const patch = await axios.delete(
                    `${url}mypage/wishlist/delete/${userId}/liquor/${isWish}`
                  );

                  if (patch.status === 200) {
                    getLiquorInformation();
                  }
                } catch (error) {
                  window.alert("즐겨찾기 해제 실패");
                }
              }}
            />
          ) : (
            <AddWishList
              wishCount={liquor.total_bookmark}
              type="liquor"
              itemId={liquorId}
              onClick={async () => {
                if (userId === 0) {
                  navigate("/signin");
                }
                try {
                  const patch = await axios.post(
                    `${url}mypage/wishlist/create/liquor`,
                    {
                      user_id: user.id,
                      liquor_id: liquorId,
                    }
                  );

                  if (patch.status === 201) {
                    getLiquorInformation();
                  }
                  if (patch.status === 200) {
                    window.alert("이미 즐겨찾기에 등록되었습니다.");
                  }
                } catch (error) {
                  window.alert("회원전용 기능입니다.");
                }
              }}
            />
          )}

          {Boolean(isDone) ? (
            <DeleteDoneList
              type="liquor"
              itemId={isDone}
              doneCount={liquor.total_bookmark}
              onClick={async () => {
                try {
                  const patch = await axios.delete(
                    `${url}mypage/donelist/delete/${userId}/liquor/${isDone}`
                  );

                  if (patch.status === 200) {
                    getLiquorInformation();
                  }
                } catch (error) {
                  window.alert("마셔봤어요 해제 실패");
                }
              }}
            />
          ) : (
            <AddDoneList
              doneCount={liquor.total_bookmark}
              type="liquor"
              itemId={liquorId}
              onClick={async () => {
                if (userId === 0) {
                  navigate("/signin");
                }
                try {
                  const patch = await axios.post(
                    `${url}mypage/donelist/create/liquor`,
                    {
                      user_id: user.id,
                      liquor_id: liquorId,
                    }
                  );
                  if (patch.status === 201) {
                    getLiquorInformation();
                  }
                  if (patch.status === 200) {
                    window.alert("이미 마셔봤어요에 등록되었습니다.");
                  }
                } catch (error) {
                  window.alert("회원전용 기능입니다.");
                }
              }}
            />
          )}
          <AddRecipeButton />
        </ImgWrapper>
      </ColumnDiv>
    </>
  );
}

export default LiquorInformation;
