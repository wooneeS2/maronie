import styled from "styled-components";
import { FlexColumnCenterBox } from "design/commonStyles";
import { mainYellowLight } from "design/colorPalette";

export const ImageSearchImg = styled.img`
  width: 40%;
`;
export const ImageSearchTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1.5rem 0 10px 5px;
  text-align: center;
`;
export const ImageResultWrapper = styled(FlexColumnCenterBox)`
  align-items: center;
  height: 85vh;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  padding: 10px;
  margin-top: 80px;
`;
export const NoImageResultWrapper = styled(FlexColumnCenterBox)``;

export const MoreButton = styled.div`
    align-items: center;
    background-color: ${mainYellowLight};
    border: 2px solid #111;
    border-radius: 8px;
    box-sizing: border-box;
    color: #111;
    cursor: pointer;
    display: flex;
    font-family: Inter, sans-serif;
    font-size: 16px;
    height: 48px;
    justify-content: center;
    line-height: 24px;
    max-width: 100%;
    padding: 0 25px;
    position: relative;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    margin:20px;
  }

  &:after {
    background-color: #111;
    border-radius: 8px;
    content: "";
    display: block;
    height: 48px;
    left: 0;
    width: 100%;
    position: absolute;
    top: -2px;
    transform: translate(8px, 8px);
    transition: transform 0.2s ease-out;
    z-index: -1;
  }

  &:hover:after {
    transform: translate(0, 0);
  }

  

  &:hover {
    outline: 0;
  }

  @media (min-width: 768px) {
    & {
      padding: 0 40px;
    }
  
`;
