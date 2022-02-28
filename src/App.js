import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import GlobalStyle from "./design/GlobalStyles";
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <header className="App-header"></header>
        <Routes>
          {/* <Route exact path="/" element={<IntroPage />}></Route> */}
          {/* <Route exact path="/search" element={<SearchPage />}></Route> */}
          {/* <Route path="/liquor" element={<DetailPage />}></Route> */}
          <Route exact path="/signup" element={<SignUpPage />}></Route>
          <Route exact path="/signin" element={<SignInPage />}></Route>
          {/* <Route path="*" element={<ErrorPage />}></Route> */}
        </Routes>
      </BrowserRouter>

      <footer></footer>
    </>
  );
}

export default App;
