import { React, useState } from "react";
import { MdAdd, MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { BiDrink } from "react-icons/bi";
import CocktailModal from "../cocktailRecipeModal/cocktailModal";

export function CocktailInformation({ cocktails }) {
  const [openCocktailModal, setOpenCocktailModal] = useState(false);
  const showCocktailModal = () => {
    setOpenCocktailModal(true);
  };
  const closeCocktailModal = () => {
    setOpenCocktailModal(false);
  };

  return (
    <>
      <div id="cocktailInformation">
        {cocktails.map(i => {
          return (
            <div key={i.img}>
              <button>
                <MdAdd />
              </button>
              <button>
                <BiDrink />
              </button>
              <div id="cocktailImage">
                <button>
                  <MdFavoriteBorder />
                </button>
                <img
                  src={i.img}
                  alt={i.name}
                  onClick={() => {
                    showCocktailModal();
                  }}
                />
                <p id="cocktailName">{i.name}</p>
                <p id="cocktailLevel">{i.level}</p>
                {openCocktailModal && <CocktailModal />}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CocktailInformation;
