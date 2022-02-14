import React from "react";
import { MdFavoriteBorder } from "react-icons/md";

export function LiquorInformation({ liquor }) {
  return (
    <>
      <div id="liquorInformation">
        <div id="liquorImage">
          <button>
            <MdFavoriteBorder />
          </button>
          <img src={liquor.img} alt="liquor image" />
        </div>
        <div>
          <p>{liquor.name}</p>
          <div>{liquor.rating}</div>
          <p>{liquor.description}</p>
        </div>
      </div>
    </>
  );
}

export default LiquorInformation;
