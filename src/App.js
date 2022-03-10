import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import GlobalStyle from "./design/GlobalStyles";
import DetailPage from "./pages/DetailPage";
import ReviewRegistrationPage from "./pages/ReviewRegistrationPage";
import CocktailDetailPage from "./pages/CocktailDetailPage";
import RecipeRegistrationPage from "./pages/RecipeRegisterationPage";
import TextSearchResultPage from "./pages/TextSearchResultPage";
import ImageSearchResultPage from "./pages/ImageSearchResultPage";
import SearchPage from "./pages/SearchPage";
import IntroPage from "./pages/IntroPage";
import Header from "./components/header/Hearder";
import RecipeEditPage from "pages/RecipeEditPage";
import ReviewEditPage from "pages/ReviewEditPage";
function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<IntroPage />} />
            <Route path="/liquor" element={<DetailPage />} />
            <Route
              path="/liquor/create/review"
              element={<ReviewRegistrationPage />}
            />
            <Route path="/cocktail/detail" element={<CocktailDetailPage />} />
            <Route
              path="/cocktail/register"
              element={<RecipeRegistrationPage />}
            />

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
