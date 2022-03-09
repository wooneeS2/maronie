import React from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "../data/state";
import RecipeItems from "../components/AuthPage/RecipeItems";
function MyRecipePage() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [user, setUser] = useRecoilState(userState);
  const [recipeData, setRecipeData] = React.useState({});

  React.useEffect(() => {
    console.log(user);
    setIsLoading(true);
    const call = async () => {
      setIsLoading(true);
      const response = await axios
        .get(
          process.env.REACT_APP_DB_HOST + `Mypage/recipe/user_id=${user["id"]}`
        )
        .then((res) => res.data);
      // TODO 백엔드에서 수정해주실지 확인
      setRecipeData(response);
    };
    call();
    setIsLoading(false);
  }, []);

  return (
    <>
      <RecipeItems obj={recipeData} />
    </>
  );
}
export default MyRecipePage;
