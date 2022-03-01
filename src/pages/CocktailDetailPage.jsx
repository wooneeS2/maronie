import React from "react";
import StarIcon from "@mui/icons-material/Star";
import {
  ColumnDiv,
  CenterAlignmentDiv,
  BoldTitle,
  imageStyle,
} from "../design/commonStyles";
import {
  CocktailName,
  levelStyle,
  ItalicTitle,
  RecipeBox,
  IngredientChip,
} from "../design/detailPage/CocktailDetailPageStyles";
import {
  AddWishList,
  AddDoneList,
} from "../components/detailPage/WishListButtons";

function CocktailDetailPage({ cocktail }) {
  return (
    <ColumnDiv>
      <CenterAlignmentDiv>
        <img src={cocktail.img} alt="cocktail" style={imageStyle} />
        <div>
          <CocktailName>데킬라선라이즈</CocktailName>
          {[...Array(cocktail.level)].map((n, index) => {
            return <StarIcon style={levelStyle} key={`rating star ${index}`} />;
          })}
          <ItalicTitle>by @{cocktail.user}</ItalicTitle>
          <AddWishList />
          <AddDoneList />
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

export default CocktailDetailPage;
