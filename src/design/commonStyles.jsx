import styled from "styled-components";
import { mainYellowDark, mainYellowLight } from "./colorPalette";

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
  margin: 0 auto;
`;
