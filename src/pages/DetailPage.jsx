import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LiquorInformation from "../components/detailPage/LiquorInformation";
import ParingInformation from "../components/detailPage/ParingInformation";
import CocktailImformation from "../components/detailPage/CocktailInformation";
import LiquorReview from "../components/detailPage/LiquorReview";
import axios from "axios";

const liquorReviewInfo = [
  {
    liquorRating: 4.2,
    userRating: "3",
    userName: "워니111",
    reviewDate: "2021-09-20",
    reviewContent:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ex harum numquam aperiam aliquam nesciunt. Cupiditate repellat delectus optio consequatur rerum neque ea, fuga assumenda excepturi, a molestiae saepe beatae?",
  },
  {
    liquorRating: 4,
    userRating: "2",
    userName: "지원111",
    reviewDate: "2021-07-22",
    reviewContent:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ex harum numquam aperiam aliquam nesciunt. Cupiditate repellat delectus optio consequatur rerum neque ea, fuga assumenda excepturi, a molestiae saepe beatae?",
  },
  {
    liquorRating: 4,
    userRating: "1",
    userName: "다혜111",
    reviewDate: "2021-01-10",
    reviewContent:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ex harum numquam aperiam aliquam nesciunt. Cupiditate repellat delectus optio consequatur rerum neque ea, fuga assumenda excepturi, a molestiae saepe beatae?",
  },
];
const GET_API = process.env.REACT_APP_DB_HOST;

export function DetailPage() {
  const liquorId = useParams();
  const [liquorInfo, setLiquorInfo] = useState([]);
  const [paringInfo, setParingInfo] = useState([]);
  const [cocktailInfo, setCocktailInfo] = useState([]);

  const getLiquorInformation = async liquorId => {
    const response = await axios.get(`${GET_API}/liquor=${liquorId}`);
    setLiquorInfo(response.data.liquor);
    setParingInfo(response.data.paring);
    setCocktailInfo(response.data.cocktail);
  };

  useEffect(() => {
    getLiquorInformation(liquorId.item);
  }, []);

  return (
    <>
      <LiquorInformation liquor={liquorInfo} />
      <ParingInformation parings={paringInfo} />
      <CocktailImformation cocktails={cocktailInfo} />
      <LiquorReview
        liquorReviews={liquorReviewInfo}
        liquorId={liquorId.item}
        liquorImg={liquorInfo.liquor_image}
        liquorName={liquorInfo.liquor_name_kor}
      />
    </>
  );
}

export default DetailPage;
