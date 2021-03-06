import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  mainOrange,
  mainWhite,
  mainYellowDark,
  mainYellowLight,
} from "./colorPalette";

export const TableItem = styled.div`
  margin: 0 10px;
  display: flex;
  border-bottom: 1px solid gray;
`;

export const FlexColumnCenterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FlexRowCenterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const CenterBox = styled.div`
  text-align: center;
`;

export const StyledButton = styled.button`
  border: 0;
  outline: 0;
  background-color: ${mainOrange};
  color: ${mainWhite};
  border-radius: 10px;
  cursor: pointer;
  padding: 10px;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: black;
  }
`;
export const BothSideLineText = styled.p`
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.35);
  font-size: 14px;
  margin: 8px 0px;
  &:before,
  &:after {
    background-color: rgba(0, 0, 0, 0.35);
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
  }
  &:before {
    right: 0.5em;
    margin-left: -50%;
  }
  &:after {
    left: 0.5em;
    margin-right: -50%;
  }
`;
export const ItemsContainer = styled.div`
  margin: 25px 0;
  display: flex;
  flex-direction: column;
  justify-items: center;
`;

export const PageTitle = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;

export const CenterAlignmentDiv = styled.div`
  margin: 0 auto;
  justify-content: center;
  text-align: center;
`;

export const RegisterButton = styled.button`
  width: 50vw;
  max-width: 390px;

  padding: 10px;
  margin-top: 1rem;
  margin-bottom: 1rem;

  border-radius: 100px;
  border-color: transparent;

  background-color: ${mainYellowLight};
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    background-color: ${mainYellowDark};
  }
`;

export const BoldTitle = styled.p`
  font-weight: bold;
`;

export const imageStyle = {
  display: "block",
  width: "100%",
};

export const HorizontalLine = ({ style }) => {
  return <hr style={style} />;
};

export const ImgWrapper = styled(RowDiv)`
  position: relative;
  width: 60%;
  max-height: 550px;
  margin: 0 auto;
`;

export const LiquorSubTitle = styled.p`
  font-weight: bold;
  padding: 5px;
`;
export const TextSearchImageWrapper = styled.div`
  width: 150px;
  height: 200px;

  img {
    width: 150px;
    height: 100%;
  }
`;
