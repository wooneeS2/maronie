import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./design/GlobalStyles";
import TextSearchResultPage from "./pages/TextSearchResultPage";
import ImageSearchResultPage from "./pages/ImageSearchResultPage";
import SearchPage from "./pages/SearchPage";
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <header className="App-header"></header>
        <Routes>
          {/* <Route exact path="/" element={<IntroPage />}></Route> */}
          <Route exact path="/search" element={<SearchPage />}></Route>
          <Route
            exact
            path="/text-search-result/:keyword"
            element={<TextSearchResultPage />}
          ></Route>
          <Route
            exact
            path="/image-search-result/:imageFile"
            element={<ImageSearchResultPage />}
          ></Route>
          {/* <Route exact path="/sing-up" element={<SignUpPage />}></Route>
          <Route exact path="/sing-in" element={<SignInPage />}></Route> */}
          {/* <Route path="*" element={<ErrorPage />}></Route> */}
          {/* <Route path="/liquor" element={<DetailPage />}></Route> */}
          {/* <Route exact path="/sing-up" element={<SignUpPage />}></Route>
          <Route exact path="/sing-in" element={<SignInPage />}></Route> */}
          {/* <Route path="*" element={<ErrorPage />}></Route> */}
        </Routes>
      </BrowserRouter>

      <footer></footer>
    </>
  );
}

export default App;
