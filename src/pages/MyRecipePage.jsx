import React from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "../data/state";
import RecipeItems from "../components/AuthPage/RecipeItems";
function MyRecipePage() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [user, setUser] = useRecoilState(userState);
  const [recipeData, setRecipeData] = React.useState([]);

  React.useEffect(() => {
    setIsLoading(true);
    const call = async () => {
      const response = await axios
        .get(process.env.REACT_APP_DB_HOST + `mypage/recipe/${user["id"]}`)
        .then((res) => res.data);
      setRecipeData(response);
      setIsLoading(false);
    };
    call();
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <div>로딩중</div>
          <div>로딩중</div>
          <div>로딩중</div>
          <div>로딩중</div>
          <div>로딩중</div>
          <div>로딩중</div>
        </>
      ) : (
        <RecipeItems list={recipeData} />
      )}
    </>
  );
}
export default MyRecipePage;
