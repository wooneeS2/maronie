import React from "react";

import LiquorInformation from "../components/detailPage/LiquorInformation";
import ParingInformation from "../components/detailPage/ParingInformation";
import CocktailImformation from "../components/detailPage/CocktailInformation";
import LiquorReview from "../components/detailPage/LiquorReview";

const liquorInfo = {
  img: "https://file.mk.co.kr/meet/neds/2020/08/image_readtop_2020_812159_15967844304309365.jpg",
  name: "엑스레이티드",
  rating: 4.8,
  wishCount: 33,
  doneCount: 53,
  classfication: "럼",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempora architecto veritatis aliquid ea magni cum libero molestiae facilis maxime dolore odio ipsum natus dignissimos non veniam, quisquam beatae nihil! ",
};

const paringInfo = [
  {
    img: "https://cdn.crowdpic.net/detail-thumb/thumb_d_7EF8EDA93AFD768F4AFB16D42ECA7354.png",
    name: "피자",
  },
  {
    img: "https://w7.pngwing.com/pngs/948/76/png-transparent-crispy-fried-chicken-church-s-chicken-chicken-fingers-fried-chicken.png",
    name: "치킨",
  },
  {
    img: "https://w7.pngwing.com/pngs/927/174/png-transparent-hot-dog-junk-food-nachos-vegetarian-cuisine-totopo-nachos-food-recipe-cuisine-thumbnail.png",
    name: "나쵸",
  },
];

const cocktailInfo = [
  {
    img: "https://cphoto.asiae.co.kr/listimglink/1/2021012910545251940_1611885291.jpg",
    name: "프렌치 키스",
    level: "2",
  },
  {
    img: "https://mblogthumb-phinf.pstatic.net/MjAxODA5MThfMjA1/MDAxNTM3Mjc2MjE4NDU5.vcuHx4LOxiYtyrbu7b9z8vpH_jcE1qEzMGTbzFJ4Vbcg.VSJDU1F5S2HLjT-ckp6loi-lc0f5OcRR-oPfpAH5tq4g.PNG.2n2o/image.png?type=w800",
    name: "선라이즈",
    level: "3",
  },
  {
    img: "https://t1.daumcdn.net/cfile/blog/2751A44E51A43BEF1A",
    name: "LAX",
    level: "1",
  },
];

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

export function DetailPage() {
  return (
    <>
      <LiquorInformation liquor={liquorInfo} />
      <ParingInformation parings={paringInfo} />
      <CocktailImformation cocktails={cocktailInfo} />

      <LiquorReview liquorReviews={liquorReviewInfo} />
    </>
  );
}

export default DetailPage;
