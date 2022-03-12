import styled from "styled-components";
import { ItemsContainer } from "../commonStyles";

export const ReviewItemsContainer = styled(ItemsContainer)`
  align-items: center;
`;
export const ReviewItemThumbnail = styled.img`
  width: 80px;
`;
export const ReviewItemWrapper = styled.div`
  border-radius: 5px;
  margin: 10px;
  padding: 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 1px 10px 0px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 60vw;
`;

export const ReviewItemSection = styled.div`
  padding: 5px;
`;
