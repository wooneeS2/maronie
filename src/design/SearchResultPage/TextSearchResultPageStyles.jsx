import styled from "styled-components";
import { FlexColumnCenterBox } from "../commonStyles";

export const TextResultItemTitle = styled.h3`
  font-size: 1.3rem;
  color: black;
  margin-bottom: 0;
`;
export const TextReusltItemSubtitle = styled.p`
  color: gray;
  margin-top: 2px;
`;
export const TextResultItemPrice = styled.p`
  font-size: 1.1rem;
  margin: 0;
  color: gray;
`;
export const TextResultItemDescription = styled.p`
  font-size: 0.8rem;
  color: gray;
`;
export const TextSearchResultImage = styled.img`
  height: 200px;
  margin: auto 0;
`;

export const FlexRightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
`;
export const NoTextResultWrapper = styled(FlexColumnCenterBox)`
  margin: 8%;
`;
export const BetterSearchResultItem = styled.li`
  &:before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 4px;
    margin-right: 9px;
    border-radius: 2px;
    vertical-align: 3px;
    background-color: #aaa;
  }
`;
