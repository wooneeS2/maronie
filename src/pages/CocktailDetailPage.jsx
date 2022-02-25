import React from "react";
import { mainYellowLight } from "../design/colorPalette";
import { ButtonBox } from "../design/detailPage/LiquorInformationStyles";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LocalBarOutlinedIcon from "@mui/icons-material/LocalBarOutlined";

function CocktailDetailPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: "1rem",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img
          src="https://w.namu.la/s/39769bb098cb6403f4f3510fe0e1c54a40e765b6cce5f4883f70d52c88ff2b8ea0dfe4c61001fdc0c2c1cbc666847471c60a7facf52e711a3455776bd46b43a9b13dff7c2873d3cbe0ed2f10c9e662f6"
          alt="cocktail"
          style={{ width: "30vw", height: "35vw" }}
        />
        <div style={{ marginTop: "1rem" }}>
          <span
            style={{
              fontWeight: "bold",
              marginRight: "10px",
            }}
          >
            데킬라선라이즈
          </span>
          <span
            style={{
              backgroundColor: `${mainYellowLight}`,
              borderRadius: "1rem",
              padding: "2px",
              fontSize: "0.8rem",
            }}
          >
            상
          </span>
          <p style={{ fontStyle: "italic", color: "grey" }}>by @woonee</p>
          <p>⎨ 일출이 떠오르는 색감과 기가막힌 맛의 칵테일 ⎬</p>
          <div>
            <ButtonBox>
              <StarBorderOutlinedIcon />
              <span>즐겨찾기 </span>
            </ButtonBox>
            <ButtonBox>
              <LocalBarOutlinedIcon sx={{}} />
              <span>마셔봤어요!</span>
            </ButtonBox>
          </div>
        </div>
      </div>

      <div>
        <p style={{ fontWeight: "bold" }}>칵테일 레시피</p>

        <div
          style={{
            boxShadow:
              "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
            padding: "1rem 3rem",
            borderRadius: "10px",
            lineHeight: "1.5rem",
          }}
        >
          <span style={{ fontWeight: "bold" }}>재료: </span>
          <span style={{ fontStyle: "italic" }}>
            민트,체리색소,오렌지주스,데킬라,체리
          </span>
          <p style={{ fontWeight: "bold" }}>1단계</p>
          <p>Lorem ipsum dolor sit amet consectetur </p>
          <p style={{ fontWeight: "bold" }}>2단계</p>
          <p>Lorem ipsum dolor sit amet consectetur </p>
          <p style={{ fontWeight: "bold" }}>3단계</p>
          <p>Lorem ipsum dolor sit amet consectetur </p>
          <p style={{ fontWeight: "bold" }}>4단계</p>
          <p>Lorem ipsum dolor sit amet consectetur </p>
        </div>
      </div>
    </div>
  );
}

export default CocktailDetailPage;
