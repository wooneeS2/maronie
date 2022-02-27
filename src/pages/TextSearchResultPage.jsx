import React from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs } from "@mui/material";
import TextSearchInput from "../components/SearchPage/TextSearchInput";
import { TextSearchResultWrapper } from "../design/SearchPage/SearchPageStyles";
import {
  TextResultItemTitle,
  StyledLink,
  TextResultItemPrice,
  TextResultItemDescription,
} from "../design/SearchResultPage/TextSearchResultPageStyles";
import NoSearchResult from "../components/SearchResultPage/NoSearchResult";
import { AiOutlineRight } from "react-icons/ai";
function TextSearchResultPage() {
  const params = useParams();
  const searchKeyword = params.keyword;
  let dummy = {
    liquor: [
      {
        name: "술이름1",
        price: 100,
        url: "https://products0.imgix.drizly.com/ci-bombay-sapphire-4967085f606d9efa.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&dpr=2&fm=jpg&h=240&q=20",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, nulla voluptas necessitatibus odit nemo odio ullam impedit velit iste facere cum accusantium beatae perferendis consectetur quia repellendus minima veniam quibusdam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, nulla voluptas necessitatibus odit nemo odio ullam impedit velit iste facere cum accusantium beatae perferendis consectetur quia repellendus minima veniam quibusdam.(약 470자)",
      },
      {
        name: "술이름2",
        price: 100,
        url: "https://products0.imgix.drizly.com/ci-bombay-sapphire-4967085f606d9efa.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&dpr=2&fm=jpg&h=240&q=20",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, nulla voluptas necessitatibus odit nemo odio ullam impedit velit iste facere cum accusantium beatae perferendis consectetur quia repellendus minima veniam quibusdam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, nulla voluptas necessitatibus odit nemo odio ull(약 350자)",
      },
      {
        name: "술이름3",
        price: 100,
        url: "https://products0.imgix.drizly.com/ci-bombay-sapphire-4967085f606d9efa.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&dpr=2&fm=jpg&h=240&q=20",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipi Lorem ipsum dolor sit, amet consectetur adipi Lorem ipsum dolor sit, amet consectetur adipi a;jj(약 150자)",
      },
      {
        name: "술이름4",
        price: 100,
        url: "https://products0.imgix.drizly.com/ci-bombay-sapphire-4967085f606d9efa.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&dpr=2&fm=jpg&h=240&q=20",
      },
    ],
    cocktail: [
      {
        name: "칵테일1",
        price: 1100000,
        url: "http://res.heraldm.com/content/image/2015/03/12/20150312001242_0.jpg",
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

  const [currentTab, setCurrentTab] = React.useState("liquor");
  const handleChange = (e, newValue) => {
    setCurrentTab(newValue);
  };
  return (
    <>
      {/* TODO 폰트크기 키우기 */}
      <TextSearchInput />
      <Tabs variant="fullWidth" value={currentTab} onChange={handleChange}>
        <Tab value="liquor" label="술" />
        <Tab value="cocktail" label="칵테일" />
      </Tabs>

      {dummy[currentTab].length > 0 ? (
        <TextSearchResultWrapper className="contentArea">
          {dummy[currentTab].map((item) => (
            // TODO  상세페이지 주소 확정되면 넣기
            <StyledLink to="/각각의 아이템 상세페이지">
              <div
                style={{
                  margin: "0 10px",
                  display: "flex",
                  borderBottom: "1px solid gray",
                }}
              >
                {
                  <img
                    style={{ height: "200px", margin: "auto 0" }}
                    src={item["url"]}
                    alt="술 검색결과"
                  />
                }
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  {/* TODO 간격 및 폰트 크기 조절 */}
                  <TextResultItemTitle>{item["name"]}</TextResultItemTitle>
                  <TextResultItemPrice>{item["price"]}원</TextResultItemPrice>
                  <TextResultItemDescription>
                    {item["description"]}
                  </TextResultItemDescription>
                </div>
                <div
                  style={{
                    marginLeft: "auto",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AiOutlineRight size={20} />
                </div>
              </div>
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
