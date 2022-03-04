import React, { useState, useEffect } from "react";
import CocktailDetail from "../components/cocktailDetail/CocktailDetail";
import axios from "axios";
import { useParams } from "react-router-dom";

const GET_API = process.env.REACT_APP_DB_HOST;

function CocktailDetailPage() {
  const cocktailId = useParams();
  const [cocktails, setCocktails] = useState([]);
  const getCocktailInformation = async cocktailId => {
    const response = await axios.get(`${GET_API}/cocktail=${cocktailId}`);
    console.log(response.data);
    setCocktails(response.data);
  };
  useEffect(() => {
    getCocktailInformation(cocktailId.item);
  }, []);

  return (
    <CocktailDetail
      cocktail={
        {
          cocktail_name: "데킬라 선라이즈",
          image_path:
            "https://w.namu.la/s/39769bb098cb6403f4f3510fe0e1c54a40e765b6cce5f4883f70d52c88ff2b8ea0dfe4c61001fdc0c2c1cbc666847471c60a7facf52e711a3455776bd46b43a9b13dff7c2873d3cbe0ed2f10c9e662f6",
          level: 3,
          user: "워니",
          wishCount: 33,
          doneCount: 53,
          ingredients: ["체리", "바나나", "딸기"],
          recipe: [
            "체리 씨를 뺀다.",
            "바나나 껍질을 깐다.",
            "딸기를 흐르는 물에 씻는다.",
          ],
          wishList: 23,
          doneList: 43,
          description: "새콤달콤 존맛탱탱구리",
          alcohol: 14.5,
        }
        // cocktails
      }
    />
  );
}

export default CocktailDetailPage;
