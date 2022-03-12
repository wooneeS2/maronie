import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../data/state";
import { StyledLink } from "../../design/commonStyles";
import {
  RecipeItemsContainer,
  RecipeItemWrapper,
} from "../../design/AuthPage/MyRecipePageStyles";
import { ReviewItemThumbnail } from "../../design/AuthPage/MyReviewPageStyles";
import CocktailLevel from "../../components/detailPage/widget/CocktailLevel";
import { Chip } from "@mui/material";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import NoItem from "./NoItem";
import { BsPencilSquare } from "react-icons/bs";
import { IoTrashOutline } from "react-icons/io5";
function RecipeItems({ recipeData, setRecipeData }) {
  const [user, setUser] = useRecoilState(userState);
  const [isOpen, setIsOpen] = React.useState([]);
  let navigate = useNavigate();
  const handleOpen = (cocktailId) => {
    let newIsOpen;
    if (isOpen.includes(cocktailId)) {
      newIsOpen = isOpen.filter((item) => item !== cocktailId);
    } else {
      newIsOpen = [...isOpen, cocktailId];
    }
    setIsOpen(newIsOpen);
  };

  const checkOpen = (recipeId) => {
    return isOpen.includes(recipeId);
  };

  const handleEdit = (e, cocktailId) => {
    e.stopPropagation();
    navigate(`edit/${cocktailId}`);
  };

  const handleDelete = async (e, cocktailId) => {
    e.stopPropagation();
    if (window.confirm("정말 삭제하시겠습니까?")) {
      await axios
        .delete(
          process.env.REACT_APP_DB_HOST +
            `cocktail/recipe/delete/${user["id"]}/cocktail/${cocktailId}`
        )
        .then(() => {
          alert("삭제 성공!");
          const newRecipeData = recipeData.filter(
            (item) => item["cocktail_id"] !== cocktailId
          );
          setRecipeData(newRecipeData);
        })
        .catch(() => alert("오류가 발생했습니다, 잠시후에 다시 시도해주세요!"));
    }
  };
  if (recipeData.length > 0) {
    return (
      <>
        <RecipeItemsContainer style={{ marginTop: "81px" }}>
          {recipeData.map((item, idx) => (
            <RecipeItemWrapper
              onClick={() => handleOpen(item["cocktail_id"])}
              key={`recipe-${idx}`}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ position: "absolute", right: 13, top: 13 }}>
                  <BsPencilSquare
                    size={20}
                    style={{ padding: "5px" }}
                    onClick={(e) => {
                      handleEdit(e, item["cocktail_id"]);
                    }}
                  />
                  <IoTrashOutline
                    size={20}
                    style={{ padding: "5px" }}
                    onClick={(e) => {
                      handleDelete(e, item["cocktail_id"]);
                    }}
                  />
                </div>

                <StyledLink to={`/cocktail/` + item[`cocktail_id`]}>
                  <ReviewItemThumbnail
                    src={process.env.REACT_APP_DB_IMG + item["image_path"]}
                    alt={item[`cocktail_name_kor`] + " 이미지"}
                  />
                </StyledLink>

                <div style={{ padding: "10px" }}>
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      marginBottom: 0,
                    }}
                  >
                    {item[`cocktail_name_kor`]}
                  </span>

                  <CocktailLevel level={item["level"]} />

                  <p style={{ marginTop: "5px" }}>{item[`description`]}</p>
                </div>
              </div>
              <div
                style={{
                  display: checkOpen(item["cocktail_id"]) ? "block" : "none",
                  textAlign: "center",
                  padding: "7px",
                }}
              >
                <h3>재료</h3>
                {item["ingredients"].map((item, idx) => (
                  <Chip
                    label={item}
                    variant="outlined"
                    key={`ingredients-${idx}`}
                  />
                ))}

                <h3>만드는 방법</h3>
                {item["recipe"].map((item, idx) => (
                  <p key={`step-${idx}`}>
                    {idx + 1}
                    {")"} {item}
                  </p>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {checkOpen(item["recipe_id"]) ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </div>
            </RecipeItemWrapper>
          ))}
        </RecipeItemsContainer>
      </>
    );
  } else return <NoItem page="recipe" />;
}
export default RecipeItems;
