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

function CocktailDetail({ cocktail, cocktailId }) {
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
          <p>{cocktail.description}</p>
          <span>도수 :{cocktail.alcohol}</span>
          <ItalicTitle>by @{cocktail.author}</ItalicTitle>
          <CenterAlignmentDiv style={{ width: "60%" }}>
            <AddWishList
              wishCount={cocktail.total_bookmark}
              type="cocktail"
              itemId={cocktailId}
            />
            <AddDoneList
              doneCount={cocktail.total_done}
              type="cocktail"
              itemId={cocktailId}
            />
          </CenterAlignmentDiv>
        </div>

        <div>
          <BoldTitle>칵테일 레시피</BoldTitle>
          {isIngredentsRecipeLengthOverZero ? (
            <RecipeBox>
              <BoldTitle>재료</BoldTitle>
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
                    <BoldTitle>{index + 1}단계</BoldTitle>
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
