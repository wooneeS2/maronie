import React from "react";
import {
  ColumnDiv,
  CenterAlignmentDiv,
  imageStyle,
  ImgWrapper,
} from "../../design/commonStyles";
import {
  CocktailName,
  ItalicTitle,
  RecipeBox,
  IngredientChip,
  CocktailSubTitle,
  CocktailContent,
} from "../../design/detailPage/CocktailDetailPageStyles";
import { AddWishList, AddDoneList } from "../detailPage/widget/WishListButtons";
import CocktailLevel from "../detailPage/widget/CocktailLevel";
import { LevelGuideTooltip } from "../detailPage/widget/LevelGuideTooltip";
import CircularProgress from "@mui/material/CircularProgress";
import {
  DeleteDoneList,
  DeleteWishList,
} from "../detailPage/widget/deleteButtons";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "data/state";
import { useNavigate } from "react-router-dom";

const url = process.env.REACT_APP_DB_HOST;
function CocktailDetail({ cocktail, cocktailId }) {
  const [user] = useRecoilState(userState);
  const [isWish, setIsWish] = React.useState(0);
  const [isDone, setIsDone] = React.useState(0);

  const navigate = useNavigate();
  let userId = user ? user.id : 0;

  const getCocktailInformation = async () => {
    const response = await axios.get(
      `${url}/cocktail/check_mark?user_id=${user.id}&beverage_id=${cocktailId}`
    );
    console.log(response.data);
    setIsWish(response.data.is_wish);
    setIsDone(response.data.is_done);
  };

  const isIngredentsRecipeLengthOverZero = React.useMemo(() => {
    if (cocktail && cocktail.ingredients.length > 0 && cocktail.recipe.length) {
      return true;
    }
    return false;
  }, [cocktail]);

  if (cocktail === null) {
    return null;
  }

  return (
    <ColumnDiv style={{ paddingTop: "80px" }}>
      <CenterAlignmentDiv>
        <ImgWrapper>
          <img src={cocktail.image_path} alt="cocktail" style={imageStyle} />
        </ImgWrapper>
        <div>
          <CocktailName>{cocktail.cocktail_name_kor}</CocktailName>

          <CocktailLevel level={cocktail.level} />
          <LevelGuideTooltip />
          <CocktailContent>{cocktail.description}</CocktailContent>
          {cocktail.alcohol !== -1 && (
            <CocktailContent>도수 :{cocktail.alcohol}</CocktailContent>
          )}
          <ItalicTitle>by @{cocktail.author}</ItalicTitle>
          <CenterAlignmentDiv style={{ width: "60%" }}>
            {Boolean(isWish) ? (
              <DeleteWishList
                wishCount={cocktail.total_bookmark}
                type="cocktail"
                itemId={isWish}
                onClick={async () => {
                  try {
                    const patch = await axios.delete(
                      `${url}mypage/wishlist/delete/${userId}/cocktail/${isWish}`
                    );

                    if (patch.status === 200) {
                      getCocktailInformation();
                    }
                  } catch (error) {
                    window.alert("즐겨찾기 해제 실패");
                  }
                }}
              />
            ) : (
              <AddWishList
                wishCount={cocktail.total_bookmark}
                type="cocktail"
                itemId={cocktailId}
                onClick={async () => {
                  if (userId === 0) {
                    navigate("/signin");
                  }
                  try {
                    const patch = await axios.post(
                      `${url}mypage/wishlist/create/cocktail`,
                      {
                        user_id: user.id,
                        cocktail_id: cocktailId,
                      }
                    );

                    if (patch.status === 201) {
                      getCocktailInformation();
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
                doneCount={cocktail.total_done}
                type="cocktail"
                itemId={isDone}
                onClick={async () => {
                  try {
                    const patch = await axios.delete(
                      `${url}mypage/donelist/delete/${userId}/cocktail/${isDone}`
                    );

                    if (patch.status === 200) {
                      getCocktailInformation();
                    }
                  } catch (error) {
                    window.alert("마셔봤어요 해제 실패");
                  }
                }}
              />
            ) : (
              <AddDoneList
                doneCount={cocktail.total_done}
                type="cocktail"
                itemId={cocktailId}
                onClick={async () => {
                  if (userId === 0) {
                    navigate("/signin");
                  }
                  try {
                    const patch = await axios.post(
                      `${url}mypage/donelist/create/cocktail`,
                      {
                        user_id: user.id,
                        cocktail_id: cocktailId,
                      }
                    );
                    if (patch.status === 201) {
                      getCocktailInformation();
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
          </CenterAlignmentDiv>
        </div>

        <div>
          <CocktailSubTitle>칵테일 레시피</CocktailSubTitle>
          {isIngredentsRecipeLengthOverZero ? (
            <RecipeBox>
              <CocktailSubTitle>재료</CocktailSubTitle>
              {cocktail.ingredients.map((ingredient, index) => {
                return (
                  <IngredientChip
                    value={ingredient}
                    key={`${ingredient + index}`}
                  />
                );
              })}

              {cocktail.recipe.map((r, index) => {
                return (
                  <div key={`${r + index}`}>
                    <CocktailSubTitle>{index + 1}단계</CocktailSubTitle>
                    <p>{r}</p>
                  </div>
                );
              })}
            </RecipeBox>
          ) : (
            <CircularProgress />
          )}
        </div>
      </CenterAlignmentDiv>
    </ColumnDiv>
  );
}

export default CocktailDetail;
