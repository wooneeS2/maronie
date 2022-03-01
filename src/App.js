import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import ReviewRegistrationPage from "./pages/ReviewRegistrationPage";

import GlobalStyle from "./design/GlobalStyles";
import CocktailDetailPage from "./pages/CocktailDetailPage";
import RecipeRegistrationPage from "./pages/RecipeRegistrationPage";
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <header className="App-header"></header>
        <Routes>
          {/* <Route exact path="/" element={<IntroPage />}></Route>
          <Route exact path="/search" element={<SearchPage />}></Route> */}
          <Route path="/liquor" element={<DetailPage />}></Route>
          <Route
            path="/liquor/review"
            element={
              <ReviewRegistrationPage
                image={
                  "https://d1e2y5wc27crnp.cloudfront.net/media/smartorder_reservation/product_detail/ef845bd4-215a-4e10-99da-4fdb85ce8aef.png"
                }
                liqourName={"엑스레이티드"}
              />
            }
          ></Route>
          <Route
            path="/cocktail/detail"
            element={
              <CocktailDetailPage
                cocktail={{
                  img: "https://w.namu.la/s/39769bb098cb6403f4f3510fe0e1c54a40e765b6cce5f4883f70d52c88ff2b8ea0dfe4c61001fdc0c2c1cbc666847471c60a7facf52e711a3455776bd46b43a9b13dff7c2873d3cbe0ed2f10c9e662f6",
                  level: 3,
                  user: "워니",
                  ingredients: ["체리", "바나나", "딸기"],
                  recipe: [
                    "체리 씨를 뺀다.",
                    "바나나 껍질을 깐다.",
                    "딸기를 흐르는 물에 씻는다.",
                  ],
                }}
              />
            }
          ></Route>
          <Route
            path="/cocktail/register"
            element={<RecipeRegistrationPage />}
          ></Route>

          {/* <Route exact path="/sing-up" element={<SignUpPage />}></Route>
          <Route exact path="/sing-in" element={<SignInPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route> */}
        </Routes>
      </BrowserRouter>

      <footer></footer>
    </>
  );
}

export default App;
