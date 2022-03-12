import { useParams } from "react-router-dom";
import RecipeEdit from "components/MyPage/RecipeEdit";
function RecipeEditPage() {
  const { cocktailId } = useParams();
  return (
    <>
      <RecipeEdit cocktailId={cocktailId} />
    </>
  );
}
export default RecipeEditPage;
