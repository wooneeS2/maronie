import React from "react";
import { useState } from "react";
import { CgCloseO } from "react-icons/cg";
import { MdAddAPhoto } from "react-icons/md";
import { RowDiv, imageStyle, ImgWrapper } from "../../../design/commonStyles";
import {
  AddPhotoStyle,
  AddPhotoIconStyle,
  CloseIconhWrapper,
  CloseIcon,
} from "../../../design/detailPage/RecipeRegistrationStyles";

function AddCocktailPhoto() {
  const [picture, setPicture] = useState(null);

  const resetPicture = e => {
    setPicture(null);
  };
  const onChangePicture = e => {
    setPicture(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <>
      <div>
        {picture ? (
          <RowDiv>
            <ImgWrapper>
              <img src={picture && picture} style={imageStyle} alt="file-img" />
              <CloseIconhWrapper>
                <CloseIcon>
                  <CgCloseO
                    onClick={() => {
                      resetPicture();
                    }}
                  />
                </CloseIcon>
              </CloseIconhWrapper>
            </ImgWrapper>
          </RowDiv>
        ) : (
          <div>
            <label htmlFor="cocktailPhoto">
              <ImgWrapper>
                <div style={AddPhotoStyle}>
                  <input
                    id="cocktailPhoto"
                    type="file"
                    accept="image/*"
                    onChange={onChangePicture}
                    style={{ display: "none" }}
                  />
                  <MdAddAPhoto style={AddPhotoIconStyle} />
                </div>
              </ImgWrapper>
            </label>
          </div>
        )}
      </div>
    </>
  );
}

export default AddCocktailPhoto;
