import React, { useState, useEffect } from "react";
import CocktailDetail from "../components/cocktailDetail/CocktailDetail";
import axios from "axios";
import { useParams } from "react-router-dom";

const GET_API = process.env.REACT_APP_DB_HOST;

function CocktailDetailPage() {
  const params = useParams();
  const [cocktailId, setCocktailId] = useState(params.item);
  const [cocktails, setCocktails] = useState([]);
  const getCocktailInformation = async cocktailId => {
    const response = await axios.get(`${GET_API}/cocktail=${cocktailId}`);
    setCocktails(response.data);
  };
  useEffect(() => {
    getCocktailInformation(cocktailId);
  }, [cocktailId]);

  return <CocktailDetail cocktail={cocktails} />;
}

export default CocktailDetailPage;
