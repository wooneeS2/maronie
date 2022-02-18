import React from "react";
import styled from "styled-components";

export const LiquorBox = styled.div`
  display: flex;
  justify-content: center;
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
    font-size: 0.8rem;
    font-weight: bold;
  }
  .rating {
    font-size: 1.2rem;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  padding: 0.2rem;
  margin: 0.4rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
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
