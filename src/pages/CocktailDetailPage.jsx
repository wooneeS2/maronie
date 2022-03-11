import React, { useState, useEffect } from "react";
import CocktailDetail from "../components/cocktailDetail/CocktailDetail";
import { getCocktailInformation } from "../api";
import { useParams } from "react-router-dom";

function CocktailDetailPage() {
  const params = useParams();
  const [cocktailId] = useState(params.item);
  const [cocktails, setCocktails] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      if (cocktailId) {
        const data = await getCocktailInformation(cocktailId);
        setCocktails(data);
      }
    };

    getInfo();
  }, []);

  return <CocktailDetail cocktail={cocktails} cocktailId={cocktailId} />;
}

export default CocktailDetailPage;
