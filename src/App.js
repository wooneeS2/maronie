import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import GlobalStyle from "./design/GlobalStyles";
import SearchResultPage from "./pages/SearchResultPage";
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
            path="/search-result"
            element={<SearchResultPage />}
          ></Route>
          {/* <Route path="/liquor/" element={<DetailPage />}></Route> */}
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
