import styled from "styled-components";

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
`;

export const SearchTitle = styled.h2`
  text-align: center;
`;

export const DragFileSpace = styled.div`
  border: dotted 1px black;
  margin: 10%;
  padding: 40% 10%;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: ${(props) => (props.isDragging ? "pink" : "white")};
`;

export const TabButton = styled.li`
  background-color: ${(props) => (props.isSelected ? "pink" : "white")};
  color: ${(props) => (props.isSelected ? "black" : "gray")};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const FileUploadBtn = styled.label`
  border: 1px solid black;
  padding: 5%;
  border-radius: 10px;
`;
