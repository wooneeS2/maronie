import React from "react";
import { MdAdd, MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { BiDrink } from "react-icons/bi";

export function CocktailInformation({ cocktails }) {
  return (
    <>
      <div id="cocktailInformation">
        {cocktails.map((i) => {
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
                <img src={i.img} alt={i.name} />
                <p id="cocktailName">{i.name}</p>
                <p id="cocktailLevel">{i.level}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CocktailInformation;
