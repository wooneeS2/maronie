import styled from "styled-components";

export const grayFontStyle = {
  fontSize: "0.8rem",
  color: "grey",
};

export const MoreReviewButton = styled.div`
  border: solid 2px #575757;
  padding: 6px 32px;
  border-radius: 80px;
  max-width: 50%;
  text-align: center;
  justify-content: center;
  align-item: center;
  margin: 0 auto;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;
