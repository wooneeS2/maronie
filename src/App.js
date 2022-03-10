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
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import MyPage from "./pages/MyPage";
import WishlistPage from "./pages/WishlistPage";
import DonelistPage from "./pages/DonelistPage";
import MyReviewPage from "./pages/MyReviewPage";
import MyRecipePage from "./pages/MyRecipePage";
import ErrorPage from "./pages/ErrorPage";
import Loading from "components/Loading";
function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<IntroPage />} />
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
            <Route path="/search" element={<SearchPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/mypage/wishlist" element={<WishlistPage />} />
            <Route path="/mypage/donelist" element={<DonelistPage />} />
            <Route path="/mypage/review" element={<MyReviewPage />} />
            <Route path="/mypage/recipe" element={<MyRecipePage />} />
            <Route path="*" element={<ErrorPage />} />

            <Route path="/search" element={<SearchPage />} />
            <Route
              path="/text-search-result/:keyword"
              element={<TextSearchResultPage />}
            />
            <Route
              path="/image-search-result"
              element={<ImageSearchResultPage />}
            />
            <Route
              path="/mypage/review/edit/:reviewId"
              element={<ReviewEditPage />}
            />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
      <footer></footer>
    </>
  );
}

export default App;
