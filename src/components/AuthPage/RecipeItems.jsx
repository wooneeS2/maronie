import React from "react";
import { StyledLink } from "../../design/CommonStyles";
import {
  RecipeItemsContainer,
  RecipeItemWrapper,
} from "../../design/AuthPage/MyRecipePageStyles";
import { ReviewItemThumbnail } from "../../design/AuthPage/MyReviewPageStyles";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsPencilSquare } from "react-icons/bs";
import { IoTrashOutline, IoFlagSharp } from "react-icons/io5";
import { Chip } from "@mui/material";
function RecipeItems({ obj }) {
  const [isOpen, setIsOpen] = React.useState([]);

  const handleOpen = (recipeId) => {
    let newIsOpen;
    if (isOpen.includes(recipeId)) {
      newIsOpen = isOpen.filter((item) => item !== recipeId);
    } else {
      newIsOpen = [...isOpen, recipeId];
    }
    setIsOpen(newIsOpen);
  };

  const checkOpen = (recipeId) => {
    return isOpen.includes(recipeId);
  };

  const handleCorrection = (e) => {
    e.stopPropagation();
    alert("수정");
  };
  const handleDelete = (e) => {
    e.stopPropagation();
    if (window.confirm("정말 삭제하시겠습니까?")) {
      alert("진짜 삭제");
    } else {
      alert("삭제 안됨");
    }
  };
  return (
    <>
      <RecipeItemsContainer>
        {obj.map((item) => (
          <RecipeItemWrapper onClick={() => handleOpen(item["recipe_id"])}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ position: "absolute", right: 13, top: 13 }}>
                <BsPencilSquare
                  size={20}
                  style={{ padding: "5px" }}
                  onClick={(e) => {
                    handleCorrection(e);
                  }}
                />
                <IoTrashOutline
                  size={20}
                  style={{ padding: "5px" }}
                  onClick={(e) => {
                    handleDelete(e);
                  }}
                />
              </div>

              <StyledLink to={`/cocktail/` + item[`cocktail_id`]}>
                <ReviewItemThumbnail
                  src={item["image_path"]}
                  alt={item[`cocktail_name`] + " 이미지"}
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
                  {item[`cocktail_name`]}
                </span>

                <IoFlagSharp style={{ padding: "0 10px" }} />

                <p style={{ marginTop: "5px" }}>{item[`description`]}</p>
              </div>
            </div>
            <div
              style={{
                display: checkOpen(item["recipe_id"]) ? "block" : "none",
                textAlign: "center",
                padding: "7px",
              }}
            >
              <h3>재료</h3>
              {item["ingredients"].map((item) => (
                <Chip label={item} variant="outlined" />
              ))}

              <h3>만드는 방법</h3>
              {item["recipe"].map((item, idx) => (
                <p>
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
}
export default RecipeItems;
