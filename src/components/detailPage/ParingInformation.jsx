import React from "react";
import ParingBox from "../../design/detailPage/ParingInformationStyles";

export function ParingInformation({ parings }) {
  return (
    <ParingBox>
      <hr width="65%" />
      <div className="title">
        <span>마로니에가 추천하는 어울리는 안주✨</span>
        <div className="paringImage">
          {parings.map((i, index) => {
            return (
              <div key={i.img} className="imageList">
                <img src={i.img} alt={`parings${index + 1}`} />
                <p sx={{ textAlign: "center" }} id={`parings${index + 1}`}>
                  {i.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </ParingBox>
  );
}

export default ParingInformation;
