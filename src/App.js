import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import MyPage from "./pages/MyPage";
import GlobalStyle from "./design/GlobalStyles";
import Wishlist from "./pages/Wishlist";
import Donelist from "./pages/Donelist";
import MyReview from "./pages/MyReview";
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
            <Route exact path="/mypage/wishlist" element={<Wishlist />}></Route>
            <Route exact path="/mypage/donelist" element={<Donelist />}></Route>
            <Route exact path="/mypage/review" element={<MyReview />}></Route>
            {/* <Route path="*" element={<ErrorPage />}></Route> */}
          </Routes>
        </RecoilRoot>
      </BrowserRouter>

      <footer></footer>
    </>
  );
}

export default App;
