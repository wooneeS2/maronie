import { DetailPage } from "./pages/DetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <DetailPage />
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<IntroPage />}></Route>
          <Route exact path="/search" element={<SearchPage />}></Route>
          <Route path="/liquor/" element={<DetailPage />}></Route>
          <Route exact path="/sing-up" element={<SignUpPage />}></Route>
          <Route exact path="/sing-in" element={<SignInPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter> */}

      <footer></footer>
    </div>
  );
}

export default App;
