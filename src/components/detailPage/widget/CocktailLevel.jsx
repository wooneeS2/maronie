import { IoFlagSharp } from "react-icons/io5";
import { BsPatchQuestionFill } from "react-icons/bs";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import { levelStyle } from "../../../design/detailPage/CocktailDetailPageStyles";
function CocktailLevel({ level }) {
  return (
    <>
      {[...Array(level)].map((n, index) => {
        return <IoFlagSharp style={levelStyle} key={`rating star ${index}`} />;
      })}
      <Tooltip
        title={
          <span style={{ fontSize: "0.8rem" }}>
            깃발은 레시피의 난이도를 뜻합니다.
            <br /> 깃발이 많을수록 레시피가 비교적 어려워요.
          </span>
        }
      >
        <IconButton>
          <BsPatchQuestionFill
            style={{
              color: "gray",
              opacity: "0.6",
              marginLeft: "5px",
              marginBottom: "10px",
            }}
          />
        </IconButton>
      </Tooltip>
    </>
  );
}

export default CocktailLevel;
