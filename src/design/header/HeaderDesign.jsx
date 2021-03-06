import styled from "styled-components";
import { mainWhite } from "../colorPalette";

export const HeaderButton = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  margin: 4px;
  font-size: 1.3rem;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  height: 8vh;
  max-width: 768px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  background: ${mainWhite};
  font-size: 1.2rem;
  z-index: 1;
  margin: 0 auto;
`;

export const HeaderPageName = styled.p`
  font-weight: bold;
`;
