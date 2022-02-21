import React, { useEffect, useState, useRef } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import {
  SliderContainer,
  CocktailImg,
  CocktailSliderContainer,
  CocktailNextButton,
} from "../../design/detailPage/CocktailInformationStyles";
import { mainYellowLight } from "../../design/colorPalette";

const cocktailLevel = {
  1: "하",
  2: "중",
  3: "상",
};

function CocktailImformation({ cocktails }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const TOTAL_SLIDES = 2;

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);
  return (
    <>
      <p style={{ margin: "0 auto", marginLeft: "1rem" }}>
        방금 검색한 그 술, 이렇게 마셔보는건 어때요? 😉
      </p>
      <div style={{ display: "flex", margin: "0 auto" }}>
        <CocktailNextButton onClick={prevSlide}>
          <BiLeftArrow />
        </CocktailNextButton>
        <CocktailSliderContainer>
          <SliderContainer ref={slideRef}>
            {cocktails.map(i => (
              <div
                style={{
                  maxWidth: "350px",
                  width: "100%",
                  margin: "0 auto",
                  textAlign: "center",
                }}
                key={i.img}
              >
                <CocktailImg src={i.img} />
                <span>{i.name}</span>
                <span
                  style={{
                    fontSize: "0.7rem",
                    marginLeft: "0.5rem",
                    borderRadius: "1rem",
                    padding: "0.1rem",
                    backgroundColor: mainYellowLight,
                  }}
                >
                  {cocktailLevel[i.level]}
                </span>
              </div>
            ))}
          </SliderContainer>
        </CocktailSliderContainer>
        <CocktailNextButton onClick={nextSlide}>
          <BiRightArrow />
        </CocktailNextButton>
      </div>
    </>
  );
}

export default CocktailImformation;
