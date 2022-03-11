import styled from "styled-components";
import { Chip } from "@mui/material";

export const ButtonBox = styled.button`
  display: flex;
  width: 100%;
  min-width: 250px;
  padding: 5px;
  margin: 0 auto;
  margin-top: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  text-align: center;
  justify-content: space-between;
  border: 0;
  outline: 0;
  background-color: white;
  span {
    margin-left: 10px;
  }
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;

export const ChipButton = ({ label, avatar }) => {
  return <Chip label={label} variant="outlined" avatar={avatar} />;
};
