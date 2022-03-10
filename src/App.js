import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import MyPage from "./pages/MyPage";
import GlobalStyle from "./design/GlobalStyles";
import WishlistPage from "./pages/WishlistPage";
import DonelistPage from "./pages/DonelistPage";
import MyReviewPage from "./pages/MyReviewPage";
import MyRecipePage from "./pages/MyRecipePage";
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <header className="App-header"></header>
        <RecoilRoot>
          <Routes>
            {/* <Route exact path="/" element={<IntroPage />}></Route> */}
            {/* <Route exact path="/search" element={<SearchPage />}></Route> */}
            {/* <Route path="/liquor" element={<DetailPage />}></Route> */}
            <Route exact path="/signup" element={<SignUpPage />}></Route>
            <Route exact path="/signin" element={<SignInPage />}></Route>
            <Route exact path="/mypage" element={<MyPage />}></Route>
            <Route
              exact
              path="/mypage/wishlist"
              element={<WishlistPage />}
            ></Route>
            <Route
              exact
              path="/mypage/donelist"
              element={<DonelistPage />}
            ></Route>
            <Route
              exact
              path="/mypage/review"
              element={<MyReviewPage />}
            ></Route>
            <Route
              exact
              path="/mypage/recipe"
              element={<MyRecipePage />}
            ></Route>
            {/* <Route path="*" element={<ErrorPage />}></Route> */}
          </Routes>
        </RecoilRoot>
      </BrowserRouter>

            <Route exact path="/search" element={<SearchPage />} />
            <Route
              exact
              path="/text-search-result/:keyword"
              element={<TextSearchResultPage />}
            />
            <Route
              exact
              path="/image-search-result"
              element={<ImageSearchResultPage />}
            />
            <Route
              exact
              path="/mypage/recipe/edit/:id"
              element={<RecipeEditPage />}
            ></Route>
            <Route
              exact
              path="/mypage/review/edit/:id"
              element={<ReviewEditPage />}
            ></Route>
            {/* <Route exact path="/signup" element={<SignUpPage />}/>
          <Route exact path="/signin" element={<SignInPage />}/> */}
            {/* <Route path="*" element={<ErrorPage />}/> */}
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
      <footer></footer>
    </>
  );
}

export default App;
