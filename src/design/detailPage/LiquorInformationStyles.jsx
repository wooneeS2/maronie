import React from "react";
import styled from "styled-components";

export const LiquorBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem;
  img {
    height: 300px;
    max-width: 200px;
    margin-top: 0.5rem;
  }
  p {
    display: flex;
  }
`;

export const RatingBox = styled.div`
  flex-direction: column;
  margin-top: 3rem;
  text-align: center;
  p {
    font-size: 0.9rem;
    font-weight: bold;
  }
  .rating {
    font-size: 1.2rem;
  }
`;

export const DescriptionBox = styled.div`
  display: block;
  margin: 1rem;
  span {
    display: block;
  }
  .name {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
