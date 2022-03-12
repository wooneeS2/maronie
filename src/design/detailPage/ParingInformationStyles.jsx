import styled from "styled-components";

export const ParingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  hr {
    margin-top: 1.5rem;
  }
  .title {
    margin-top: 1rem;
  }
  .paringImage {
    display: flex;
    flex-direction: row;
    text-align: center;
  }
  .imageList {
    margin-top: 0.5rem;
    flex-grow: 1;
    width: 33.3334%;
  }

  .paringImage img {
    width: 100%;
    height: 100px;
  }
`;

export const ParingImgWrapper = styled.div`
  height: 150px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ image }) => `url(${image})`};
`;
