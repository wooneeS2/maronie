import React from "react";
import {
  ParingBox,
  ParingImgWrapper,
} from "../../design/detailPage/ParingInformationStyles";
import { LiquorSubTitle } from "../../design/commonStyles";

export function ParingInformation({ parings }) {
  return (
    <ParingBox>
      <hr width="65%" />
      <div className="title">
        <LiquorSubTitle>마로니에가 추천하는 어울리는 안주✨</LiquorSubTitle>
        <div className="paringImage">
          {parings.map((i, index) => {
            return (
              <div key={i.img} className="imageList">
                <ParingImgWrapper image={i.img} />
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
