import styled from "styled-components";
import { ItemsContainer } from "../commonStyles";
export const WishItemsContainer = styled(ItemsContainer)`
  grid-template-columns: repeat(auto-fill, minmax(195px, 1fr));
  text-align: center;
`;
export const WishItemsImage = styled.img`
  width: 150px;
  height: 200px;
`;
