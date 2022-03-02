import React from "react";
import styled from "styled-components";

export const LiquorBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  p {
    display: flex;
  }
`;

export const RatingBox = styled.div`
  flex-direction: column;
  text-align: center;
  margin: 1rem;
  padding: 10px;
  margin-bottom: 20px;
`;

export const DescriptionBox = styled.div`
  display: block;
  text-align: center;
  padding: 4px;
  width: 80%;
  margin: 0 auto;
  span {
    display: block;
  }
`;

export const LiquorName = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 4px;
`;

export const LiquorRatingLabel = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 2px;
  display: block;
`;

export const LiquorDescription = styled.span`
  padding: 2px;
  word-break: keep-all;
  line-height: 1.5rem;
`;
