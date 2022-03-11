import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "../data/state";
import RecipeItems from "../components/AuthPage/RecipeItems";
import Loading from "components/Loading";
function MyRecipePage() {
  const [isLoading, setIsLoading] = React.useState(null);
  const [user, setUser] = useRecoilState(userState);
  const [recipeData, setRecipeData] = React.useState([]);

  React.useEffect(() => {
    if (user === null) {
      alert("회원 전용 기능입니다, 로그인 해주세요!");
      return;
    }
    const call = async () => {
      try {
        setIsLoading(true);
        const response = await axios
          .get(process.env.REACT_APP_DB_HOST + `mypage/recipe/${user["id"]}`)
          .then((res) => res.data);
        setRecipeData(response);
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    };
    call();
  }, []);
  if (user === null) {
    return <Navigate to="/signin" replace={true} />;
  }
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <RecipeItems recipeData={recipeData} setRecipeData={setRecipeData} />
      )}
    </>
  );
}
export default MyRecipePage;
