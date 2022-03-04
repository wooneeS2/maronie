import styled from "styled-components";

export const MainTitle = styled.p`
  font-weight: bold;
  font-size: 2.5rem;
  text-shadow: 0 0 10px white;
  margin-bottom: 4rem;
`;

export const SubTitle = styled.p`
  font-weight: bold;
  line-height: 1.5rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  padding: 8px;
  width: 80vw;
  margin: 8px;
`;

export const MainPageTextDiv = styled.div`
  cursor: pointer;
  text-align: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MainPageDiv = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0px auto;
  position: relative;
`;
