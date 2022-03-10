import axios from "axios";
const GET_API = process.env.REACT_APP_DB_HOST;

const getCocktailInformation = async cocktailId => {
  const response = await axios.get(`${GET_API}/cocktail/${cocktailId}`);
  if (response.status === 200) {
    return response.data;
  }
  return null;
};

export { getCocktailInformation };
