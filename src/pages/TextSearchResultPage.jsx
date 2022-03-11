import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import MenuTabs from "../components/SearchPage/MenuTabs";
import TextSearchInput from "../components/SearchPage/TextSearchInput";
import { TextSearchResultWrapper } from "../design/SearchPage/SearchPageStyles";
import {
  TextResultItemTitle,
  TextReusltItemSubtitle,
  TextResultItemPrice,
  TextResultItemDescription,
  TextSearchResultImage,
  FlexRightBox,
} from "../design/SearchResultPage/TextSearchResultPageStyles";
import NoTextSearchResult from "../components/SearchResultPage/NoTextSearchResult";
import {
  FlexColumnCenterBox,
  TableItem,
  StyledLink,
} from "../design/commonStyles";
import { AiOutlineRight } from "react-icons/ai";
import Loading from "components/Loading";
function TextSearchResultPage() {
  const params = useParams();
  const searchKeyword = params.keyword;
  const [currentTab, setCurrentTab] = React.useState("liquor");
  const [searchResult, setSearchResult] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(null);
  React.useEffect(() => {
    /**
     * 검색 텍스트 초기화
     */
    const textSearchRecordList =
      JSON.parse(window.localStorage.getItem("textSearchValue")) || [];
    const temp = new Set([searchKeyword, ...textSearchRecordList]);
    let newTextSearchRecordList = [...temp];
    window.localStorage.setItem(
      "textSearchValue",
      JSON.stringify(newTextSearchRecordList)
    );
  });
  React.useEffect(() => {
    const call = async () => {
      try {
        setIsLoading(true);
        const response = await axios
          .get(process.env.REACT_APP_DB_HOST + `search`, {
            params: { keyword: searchKeyword },
          })
          .then((res) => res.data);
        setSearchResult(response);
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    };
    call();
  }, [searchKeyword]);
  return (
    <>
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <TextSearchInput haveMargin="80px" />
          <MenuTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />

          {currentTab === "liquor" ? (
            searchResult[currentTab]?.length > 0 ? (
              <TextSearchResultWrapper className="contentArea">
                {searchResult[currentTab].map((item, idx) => (
                  <StyledLink
                    to={`/liquor/${item["liquor_id"]}`}
                    key={`liquor-${idx}`}
                  >
                    <TableItem>
                      {
                        <TextSearchResultImage
                          src={item["image_path"]}
                          alt={`${item["liquor_name"]} 이미지`}
                        />
                      }
                      <FlexColumnCenterBox>
                        <div>
                          <TextResultItemTitle>
                            {item["liquor_name_kor"]}
                          </TextResultItemTitle>
                          <TextReusltItemSubtitle>
                            {item["liquor_name"]}
                          </TextReusltItemSubtitle>
                        </div>
                        <TextResultItemPrice>
                          {item["price"]}원
                        </TextResultItemPrice>
                        <TextResultItemDescription>
                          {item["description"].length > 100
                            ? item["description"].substring(0, 100) + "..."
                            : item["description"]}
                        </TextResultItemDescription>
                        <Rating
                          value={item["rating"]}
                          readOnly
                          precision={0.5}
                        />
                      </FlexColumnCenterBox>
                      <FlexRightBox>
                        <AiOutlineRight size={20} />
                      </FlexRightBox>
                    </TableItem>
                  </StyledLink>
                ))}
              </TextSearchResultWrapper>
            ) : (
              <NoTextSearchResult currentTab={currentTab} />
            )
          ) : searchResult[currentTab]?.length > 0 ? (
            <TextSearchResultWrapper className="contentArea">
              {searchResult[currentTab].map((item, idx) => (
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
                      <div>
                        <TextResultItemTitle>
                          {item["cocktail_name_kor"]}
                        </TextResultItemTitle>
                        <TextReusltItemSubtitle>
                          {item["cocktail_name"]}
                        </TextReusltItemSubtitle>
                      </div>
                      <TextResultItemDescription>
                        {item["description"].length > 100
                          ? item["description"].substring(0, 100) + "..."
                          : item["description"]}
                      </TextResultItemDescription>
                    </FlexColumnCenterBox>
                    <FlexRightBox>
                      <AiOutlineRight size={20} />
                    </FlexRightBox>
                  </TableItem>
                </StyledLink>
              ))}
            </TextSearchResultWrapper>
          ) : (
            <NoTextSearchResult currentTab={currentTab} />
          )}
        </>
      )}
    </>
  );
}

export default TextSearchResultPage;
