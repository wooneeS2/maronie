import { BrowserRouter, Routes, Route } from "react-router-dom";
import { mainWhite } from "./design/colorPalette";

function App() {
  return (
    <BodyComponent className="App">
      <BrowserRouter>
        <header className="App-header"></header>

        <Routes>
          <Route exact path="/" element={<IntroPage />}></Route>
          <Route exact path="/search" element={<SearchPage />}></Route>
          <Route path="/liquor/" element={<DetailPage />}></Route>
          <Route exact path="/sing-up" element={<SignUpPage />}></Route>
          <Route exact path="/sing-in" element={<SignInPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>

      <footer></footer>
    </BodyComponent>
  );
}

const BodyComponent = styled.div`
  margin: 0 auto;
  background-color: ${mainWhite};
  @media screen and (max-width: 600px) {
    body {
      max-width: 786px;
    }
  }
`;

export default App;
