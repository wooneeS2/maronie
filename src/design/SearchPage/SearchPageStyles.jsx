import styled from "styled-components";
import { mainOrange, mainWhite } from "../colorPalette";
import { TextField } from "@mui/material";

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
  max-width: 786px;
  margin: 0 auto;
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
export const TextSearchInputContents = styled.div`
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
export const TextSearchResultWrapper = styled.div`
  display: grid;
`;
export const SearchTextInput = styled.input`
  border: 0;
  border-bottom: 2px solid gray;
  outline: 0;
  font-size: 1.3rem;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
`;
export const Stack = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
export const SearchHistoryDeleteButton = styled.button`
  float: right;
  border: 0;
  outline: 0;
  background-color: transparent;
  color: gray;
`;

export const StyledTextField = styled(TextField)`
  width: 85%;
`;
