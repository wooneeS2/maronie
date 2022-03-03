import React, { useEffect, useState, useRef } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import {
  SliderContainer,
  CocktailImg,
  CocktailSliderContainer,
  CocktailNextButton,
} from "../../design/detailPage/CocktailInformationStyles";
import CocktailLevel from "./widget/CocktailLevel";
import { LiquorSubTitle, ColumnDiv, RowDiv } from "../../design/commonStyles";
import { LevelGuideTooltip } from "./widget/LevelGuideTooltip";

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
      <ColumnDiv
        style={{
          padding: "20px",
          boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
        }}
      >
        <RowDiv>
          <LevelGuideTooltip />
          <LiquorSubTitle>
            방금 검색한 그 술, 이렇게 마셔보는건 어때요? 😉
          </LiquorSubTitle>
        </RowDiv>
        <RowDiv>
          <CocktailNextButton onClick={prevSlide}>
            <BiLeftArrow />
          </CocktailNextButton>
          <CocktailSliderContainer>
            <SliderContainer ref={slideRef}>
              {cocktails.map(i => {
                return (
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
                    <CocktailLevel level={i.level} />
                  </div>
                );
              })}
            </SliderContainer>
          </CocktailSliderContainer>
          <CocktailNextButton onClick={nextSlide}>
            <BiRightArrow />
          </CocktailNextButton>
        </RowDiv>
      </ColumnDiv>
    </>
  );
}

export default CocktailImformation;
