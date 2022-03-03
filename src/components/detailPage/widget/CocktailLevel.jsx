import { IoFlagSharp } from "react-icons/io5";
import { LevelGuideTooltip } from "./LevelGuideTooltip";
import { levelStyle } from "../../../design/detailPage/CocktailDetailPageStyles";
function CocktailLevel({ level }) {
  return (
    <>
      {[...Array(level)].map((n, index) => {
        return <IoFlagSharp style={levelStyle} key={`rating star ${index}`} />;
      })}
    </>
  );
}

export default CocktailLevel;
