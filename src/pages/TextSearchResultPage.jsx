import React from "react";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import MenuTabs from "../components/SearchPage/MenuTabs";
import TextSearchInput from "../components/SearchPage/TextSearchInput";
import { TextSearchResultWrapper } from "../design/SearchPage/SearchPageStyles";
import {
  TextResultItemTitle,
  TextResultItemPrice,
  TextResultItemDescription,
  TextSearchResultImage,
  FlexRightBox,
} from "../design/SearchResultPage/TextSearchResultPageStyles";
import NoSearchResult from "../components/SearchResultPage/NoSearchResult";
import {
  FlexColumnCenterBox,
  TableItem,
  StyledLink,
} from "../design/commonStyles";
import { AiOutlineRight } from "react-icons/ai";
function TextSearchResultPage() {
  const params = useParams();
  const searchKeyword = params.keyword;
  const [currentTab, setCurrentTab] = React.useState("liquor");
  let dummy = {
    liquor: [
      {
        id: 1,
        liquor_name: "술이름1",
        price: 100,
        image_path:
          "https://products0.imgix.drizly.com/ci-bombay-sapphire-4967085f606d9efa.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&dpr=2&fm=jpg&h=240&q=20",
        description: "Lorem",
        rating: 3.5,
      },
      {
        id: 2,
        liquor_name: "술이름2",
        price: 1000,
        image_path:
          "https://products0.imgix.drizly.com/ci-bombay-sapphire-4967085f606d9efa.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&dpr=2&fm=jpg&h=240&q=20",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, nulla voluptas necessitatibus odit nemo odio ullam impedit velit iste facere cum accusantium beatae perferendis consectetur quia repellendus minima veniam quibusdam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, nulla voluptas necessitatibus odit nemo odio ull(약 350자)",
        rating: 4.5,
      },
      {
        id: 3,
        liquor_name: "술이름3",
        price: 100,
        image_path:
          "https://products0.imgix.drizly.com/ci-bombay-sapphire-4967085f606d9efa.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&dpr=2&fm=jpg&h=240&q=20",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipi Lorem ipsum dolor sit, amet consectetur adipi Lorem ipsum dolor sit, amet consectetur adipi a;jj(약 150자)",
        rating: 2.0,
      },
    ],
    cocktail: [
      {
        cocktail_id: 1,
        cocktail_name: "칵테일1",
        price: 1100000,
        image_path:
          "http://res.heraldm.com/content/image/2015/03/12/20150312001242_0.jpg",
        description: "음~ 맛있다",
      },
    ],
  };
  React.useEffect(() => {
    /**
     * 검색 텍스트 초기화
     */
    const textSearchRecordList =
      JSON.parse(window.localStorage.getItem("textSearchValue")) || [];
    const temp = new Set([...textSearchRecordList, searchKeyword]);
    let newTextSearchRecordList = [...temp];
    window.localStorage.setItem(
      "textSearchValue",
      JSON.stringify(newTextSearchRecordList)
    );
  });

  return (
    <>
      <TextSearchInput />
      <MenuTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {currentTab === "liquor" ? (
        dummy[currentTab].length > 0 ? (
          <TextSearchResultWrapper className="contentArea">
            {dummy[currentTab].map((item, idx) => (
              <StyledLink to={`/liquor/${item["id"]}`} key={`liquor-${idx}`}>
                <TableItem>
                  {
                    <TextSearchResultImage
                      src={item["image_path"]}
                      alt={`${item["liquor_name"]} 이미지`}
                    />
                  }
                  <FlexColumnCenterBox>
                    <TextResultItemTitle>
                      {item["liquor_name"]}
                    </TextResultItemTitle>
                    <TextResultItemPrice>{item["price"]}원</TextResultItemPrice>
                    <TextResultItemDescription>
                      {item["description"].length > 100
                        ? item["description"].substring(0, 100) + "..."
                        : item["description"]}
                    </TextResultItemDescription>
                    <Rating value={item["rating"]} readOnly precision={0.5} />
                  </FlexColumnCenterBox>
                  <FlexRightBox>
                    <AiOutlineRight size={20} />
                  </FlexRightBox>
                </TableItem>
              </StyledLink>
            ))}
          </TextSearchResultWrapper>
        ) : (
          <NoSearchResult />
        )
      ) : dummy[currentTab].length > 0 ? (
        <TextSearchResultWrapper className="contentArea">
          {dummy[currentTab].map((item, idx) => (
            <StyledLink
              to={`/cocktail/${item["cocktail_id"]}`}
              key={`cocktail-${idx}`}
            >
              <TableItem>
                {
                  <TextSearchResultImage
                    src={item["image_path"]}
                    alt={`${item["cocktail_name"]} 이미지`}
                  />
                }
                <FlexColumnCenterBox>
                  <TextResultItemTitle>
                    {item["cocktail_name"]}
                  </TextResultItemTitle>
                  <TextResultItemPrice>{item["price"]}원</TextResultItemPrice>
                  <TextResultItemDescription>
                    {item["description"].length > 100
                      ? item["description"].substring(0, 100) + "..."
                      : item["description"]}
                  </TextResultItemDescription>
                  <Rating value={item["rating"]} readOnly precision={0.5} />
                </FlexColumnCenterBox>
                <FlexRightBox>
                  <AiOutlineRight size={20} />
                </FlexRightBox>
              </TableItem>
            </StyledLink>
          ))}
        </TextSearchResultWrapper>
      ) : (
        <NoSearchResult />
      )}
    </>
  );
}

export default TextSearchResultPage;
