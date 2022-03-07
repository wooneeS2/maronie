import React from "react";
import MenuTabs from "../components/SearchPage/MenuTabs";
import ReviewItems from "../components/AuthPage/ReviewItems";
function MyReviewPage() {
  const dummy = {
    liquor: [
      {
        liquor_id: 1,
        liquor_name_kor: "대강 술 이름",
        post_date: "2020-02-20",
        image_path:
          "https://thebeverageangels.com.au/wp-content/uploads/2021/12/2000033_8.jpeg",
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, nostrum, reprehenderit excepturi repellendus nulla impedit a amet distinctio obcaecati quasi id nemo quam eius odit mollitia rem numquam. Vero, possimus?,",
        rating: 4.5,
      },
      {
        liquor_id: 2,
        liquor_name_kor: "대강 술 이름2",
        post_date: "2021-12-21",
        image_path:
          "https://thebeverageangels.com.au/wp-content/uploads/2021/12/2000033_8.jpeg",
        content: "나쁘지 않군용",
        rating: 3.5,
      },
    ],
    cocktail: [
      {
        cocktail_id: 1,
        cocktail_name_kor: "대강 칵테일 이름",
        post_date: "2020-02-20",
        image_path:
          "https://thebeverageangels.com.au/wp-content/uploads/2021/12/2000033_8.jpeg",
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, nostrum, reprehenderit excepturi repellendus nulla impedit a amet distinctio obcaecati quasi id nemo quam eius odit mollitia rem numquam. Vero, possimus?,",
        rating: 4.5,
      },
      {
        cocktail_id: 2,
        cocktail_name_kor: "대강 칵테일 이름2",
        post_date: "2021-12-21",
        image_path:
          "https://thebeverageangels.com.au/wp-content/uploads/2021/12/2000033_8.jpeg",
        content: "나쁘지 않군용",
        rating: 3.5,
      },
    ],
  };
  const [currentTab, setCurrentTab] = React.useState("liquor");
  return (
    <>
      <MenuTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div>
        <ReviewItems currentTab={currentTab} obj={dummy[currentTab]} />
      </div>
    </>
  );
}
export default MyReviewPage;
