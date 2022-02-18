import styled from "styled-components";
import { mainOrange, mainWhite } from "../colorPalette";
export const TabComponent = styled.ul`
  padding-left: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5rem;
  margin: 0;
  z-index: 1000;
  cursor: pointer;
`;

export const SearchTitle = styled.h2`
  text-align: center;
`;

export const SearchDescription = styled.p`
  color: gray;
`;

export const DragFileSpace = styled.div`
  position: fixed;
  z-index: ${({ isDragging }) => (isDragging ? 10000 : 10)};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${mainOrange};
  opacity: ${({ isDragging }) => (isDragging ? 0.8 : 0)};
`;
export const ImageSearchContents = styled.div`
  margin: 10%;
  text-align: center;
  display: flex;
  flex-direction: column;
`;
export const TextSearchContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const TabButton = styled.li`
  background-color: ${({ isSelected }) =>
    isSelected ? mainOrange : mainWhite};
  color: ${({ isSelected }) => (isSelected ? "black" : "gray")};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const FileUploadBtn = styled.label`
  padding: 5%;
  border-radius: 30px;
  background-color: ${mainOrange};
  z-index: 1000;
  cursor: pointer;
`;
export const SearchContentsWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
