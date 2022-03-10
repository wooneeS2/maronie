import styled from "styled-components";
import { WishItemsWrapper } from "./WishlistPageStyles";
// TODO 이런게 종속성인가? 분리해야겠다
export const ReviewItemsWrapper = styled(WishItemsWrapper)`
  grid-template-columns: 1fr;
  text-align: left;
`;
export const ReviewItemThumbnail = styled.img`
  width: 80px;
`;
