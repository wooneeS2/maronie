import React from "react";

export function ParingInformation({ parings }) {
  return (
    <>
      {parings.map((i, index) => {
        return (
          <div id="paringInformation" key={i.img}>
            <img src={i.img} alt={`parings${index + 1}`} />
            <p id={`parings${index + 1}`}>{i.name}</p>
          </div>
        );
      })}
    </>
  );
}

export default ParingInformation;
