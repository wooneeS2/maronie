import React from "react";
import RecipeItems from "../components/AuthPage/RecipeItems";
function MyRecipePage() {
  const dummy = [
    {
      cocktail_id: 1,
      cocktail_name: "1번 칵테일",
      recipe_id: 32,
      image_path:
        "https://www.brit.co/media-library/quick-and-easy-cocktail-recipes.jpg?id=21488888&width=645&height=645",
      user_id: 1,
      description: "개존맛입니다 다들 먹어보세용",
      ingredients: ["A", "B", "C", "D", "E", "F"],
      recipe: ["물을 담는다", "어쩌구", "냠냠"],
      level: 3,
      classification_id: 1,
    },
    {
      cocktail_id: 2,
      cocktail_name: "2번 칵테일",
      recipe_id: 3223,
      image_path:
        "https://www.brit.co/media-library/quick-and-easy-cocktail-recipes.jpg?id=21488888&width=645&height=645",
      user_id: 1,
      description: "한국인이라면 이거 꼭 만들어 먹읍시다",
      ingredients: ["김치", "대충 아무 술"],
      recipe: ["물을 담는다", "어쩌구", "냠냠"],
      level: 1,
      classification_id: 1,
    },
    {
      cocktail_id: 3,
      cocktail_name: "3번 칵테일",
      recipe_id: 32112,
      image_path:
        "https://www.brit.co/media-library/quick-and-easy-cocktail-recipes.jpg?id=21488888&width=645&height=645",
      user_id: 1,
      description: "짱마싯는 칵테일",
      ingredients: ["딸기케이크", "된장찌개"],
      recipe: ["물을 담는다", "어쩌구", "냠냠"],
      level: 2,
      classification_id: 1,
    },
  ];
  return (
    <>
      <RecipeItems obj={dummy} />
    </>
  );
}
export default MyRecipePage;
