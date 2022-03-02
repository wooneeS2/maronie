import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { MdAddAPhoto } from "react-icons/md";
import { RowDiv, imageStyle } from "../../../design/commonStyles";
import {
  TrashIconStyle,
  AddPhotoStyle,
  AddPhotoIconStyle,
} from "../../../design/detailPage/RecipeRegistrationStyles";

function AddCocktailPhoto() {
  const [picture, setPicture] = useState(null);

  const resetPicture = (e) => {
    setPicture(null);
  };
  const onChangePicture = (e) => {
    setPicture(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <>
      <div>
        {picture ? (
          <RowDiv>
            <ImgWrapper>
              <img src={picture && picture} style={imageStyle} alt="file-img" />
              <BsTrashWrapper>
                <BsTrash
                  style={TrashIconStyle}
                  onClick={() => {
                    resetPicture();
                  }}
                />
              </BsTrashWrapper>
            </ImgWrapper>
          </RowDiv>
        ) : (
          <div>
            <label htmlFor="cocktailPhoto">
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
            </label>
          </div>
        )}
      </div>
    </>
  );
}

const ImgWrapper = styled(RowDiv)`
  position: relative;
  width: 60%;
  margin: 0 auto;
`;
const BsTrashWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export default AddCocktailPhoto;
