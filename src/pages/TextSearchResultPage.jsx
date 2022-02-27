import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs } from "@mui/material";
import { useParams } from "react-router-dom";
import { TextSearchResultWrapper } from "../design/SearchPage/SearchPageStyles";
import NoSearchResult from "../components/SearchResultPage/NoSearchResult";
function TextSearchResultPage() {
  let dummy = {
    liquor: [
      {
        name: "술이름1",
        price: 100,
        url: "https://products0.imgix.drizly.com/ci-bombay-sapphire-4967085f606d9efa.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&dpr=2&fm=jpg&h=240&q=20",
      },
      {
        name: "술이름2",
        price: 100,
        url: "https://products0.imgix.drizly.com/ci-bombay-sapphire-4967085f606d9efa.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&dpr=2&fm=jpg&h=240&q=20",
      },
      {
        name: "술이름3",
        price: 100,
        url: "https://products0.imgix.drizly.com/ci-bombay-sapphire-4967085f606d9efa.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&dpr=2&fm=jpg&h=240&q=20",
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

  let params = useParams();
  const searchKeyword = params.keyword;
  const [currentTab, setCurrentTab] = React.useState("liquor");
  const handleChange = (e, newValue) => {
    setCurrentTab(newValue);
  };
  return (
    <>
      {/* TODO 폰트크기 키우기 */}
      <p>{searchKeyword} 검색 결과</p>
      <Tabs variant="fullWidth" value={currentTab} onChange={handleChange}>
        <Tab value="liquor" label="술" />
        <Tab value="cocktail" label="칵테일" />
      </Tabs>

      {dummy[currentTab].length > 0 ? (
        <TextSearchResultWrapper className="contentArea">
          {dummy[currentTab].map((item) => (
            // TODO  상세페이지 주소 확정되면 넣기
            <Link to="/각각의 아이템 상세페이지">
              <div style={{ display: "flex" }}>
                {
                  <img
                    style={{ height: "200px" }}
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
                  <span>{item["name"]}</span>
                  <span>{item["price"]}원</span>
                </div>
              </div>
            </Link>
          ))}
        </TextSearchResultWrapper>
      ) : (
        <NoSearchResult />
      )}
    </>
  );
}

export default TextSearchResultPage;
