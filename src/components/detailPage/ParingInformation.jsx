import React from "react";

import {
  ParingBox,
  ParingImgWrapper,
} from "../../design/detailPage/ParingInformationStyles";
import { LiquorSubTitle } from "../../design/commonStyles";
const imgUrl = process.env.REACT_APP_DB_IMG;
const defaultImg =
  "https://freepikpsd.com/file/2019/10/galeri-icon-png-1-Transparent-Images-Free.png";

export function ParingInformation({ parings }) {
  return (
    <ParingBox>
      <hr width="65%" />
      <div className="title">
        <LiquorSubTitle>마로니에가 추천하는 어울리는 안주</LiquorSubTitle>
        <div className="paringImage">
          {parings.map((i, index) => {
            return (
              <div key={i.menu_image} className="imageList">
                {i.menu_image === "" ? (
                  <ParingImgWrapper image={defaultImg} />
                ) : (
                  <ParingImgWrapper image={imgUrl + i.menu_image} />
                )}
                <p sx={{ textAlign: "center" }} id={`parings${index + 1}`}>
                  {i.menu_name}
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
