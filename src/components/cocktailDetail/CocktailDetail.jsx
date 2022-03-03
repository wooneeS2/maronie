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
function CocktailDetail({ cocktail }) {
  return (
    <ColumnDiv>
      <CenterAlignmentDiv>
        <ImgWrapper>
          <img src={cocktail.img} alt="cocktail" style={imageStyle} />
        </ImgWrapper>
        <div>
          <CocktailName>데킬라선라이즈</CocktailName>
          <CocktailLevel level={cocktail.level} />
          <ItalicTitle>by @{cocktail.user}</ItalicTitle>
          <CenterAlignmentDiv style={{ width: "60%" }}>
            <AddWishList value={cocktail.wishCount} />
            <AddDoneList value={cocktail.doneCount} />
          </CenterAlignmentDiv>
        </div>
        <div>
          <BoldTitle>칵테일 레시피</BoldTitle>
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
        </div>
      </CenterAlignmentDiv>
    </ColumnDiv>
  );
}

export default CocktailDetail;
