import styled from "styled-components";

export const ParingBox = styled.div`
  margin: 1rem;
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
  }

  .paringImage img {
    width: 100%;
    height: 100px;
  }
`;

export default ParingBox;
