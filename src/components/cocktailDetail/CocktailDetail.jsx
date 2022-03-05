import React from "react";
import {
  ColumnDiv,
  CenterAlignmentDiv,
  BoldTitle,
  imageStyle,
  ImgWrapper,
} from "../../design/commonStyles";
import {
  CocktailName,
  ItalicTitle,
  RecipeBox,
  IngredientChip,
} from "../../design/detailPage/CocktailDetailPageStyles";
import { AddWishList, AddDoneList } from "../detailPage/widget/WishListButtons";
import CocktailLevel from "../detailPage/widget/CocktailLevel";
import { LevelGuideTooltip } from "../detailPage/widget/LevelGuideTooltip";
import CircularProgress from "@mui/material/CircularProgress";

function CocktailDetail({ cocktail }) {
  return (
    <ColumnDiv>
      <CenterAlignmentDiv>
        <ImgWrapper>
          <img src={cocktail.image_path} alt="cocktail" style={imageStyle} />
        </ImgWrapper>
        <div>
          <CocktailName>{cocktail.cocktail_name_kor}</CocktailName>

          <CocktailLevel level={cocktail.level} />
          <LevelGuideTooltip />
          <p>{cocktail.description}</p>
          <span>도수 :{cocktail.alcohol}</span>
          <ItalicTitle>by @{cocktail.author}</ItalicTitle>
          <CenterAlignmentDiv style={{ width: "60%" }}>
            {/* TODO 좋아요수, 마셔봤어요 수 추가 */}
            <AddWishList value={cocktail.wishList} />
            <AddDoneList value={cocktail.doneList} />
          </CenterAlignmentDiv>
        </div>
        <div>
          <BoldTitle>칵테일 레시피</BoldTitle>
          {cocktail.ingredients && cocktail.recipe ? (
            <RecipeBox>
              <BoldTitle>재료</BoldTitle>
              {cocktail.ingredients.map((i, index) => {
                return <IngredientChip value={i} key={i + index} />;
              })}
              {cocktail.recipe.map((i, index) => {
                return (
                  <div key={i + index}>
                    <BoldTitle>{index + 1}단계</BoldTitle>
                    <p>{i}</p>
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
