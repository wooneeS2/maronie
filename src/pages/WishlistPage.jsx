import React from "react";
import MenuTabs from "../components/SearchPage/MenuTabs";
import WishItems from "../components/AuthPage/WishItems";
function WishlistPage() {
  const dummy = {
    liquor: [
      {
        liquor_id: 1,
        image_path:
          "https://thebeverageangels.com.au/wp-content/uploads/2021/12/2000033_8.jpeg",
        liquor_name_kor: "고든스 진",
      },
      {
        liquor_id: 2,
        image_path:
          "https://cdn.webshopapp.com/shops/198134/files/341686585/bombay-sapphire-bombay-sapphire-london-dry-gin-40.jpg",
        liquor_name_kor: "봄베이 사파이어",
      },
      {
        liquor_id: 3,
        image_path:
          "https://thebeverageangels.com.au/wp-content/uploads/2021/12/2000033_8.jpeg",
        liquor_name_kor: "고든스 진2",
      },
      {
        liquor_id: 4,
        image_path:
          "https://cdn.webshopapp.com/shops/198134/files/341686585/bombay-sapphire-bombay-sapphire-london-dry-gin-40.jpg",
        liquor_name_kor: "봄베이 사파이어2",
      },
    ],
    cocktail: [
      {
        cocktail_id: 1,
        image_path:
          "https://thebeverageangels.com.au/wp-content/uploads/2021/12/2000033_8.jpeg",
        cocktail_name_kor: "블랙 러시안",
      },
      {
        cocktail_id: 2,
        image_path:
          "https://w.namu.la/s/827ac58e595bb28aa551a1d18fcbcf291a3f01890eb07e4efbb8128eb7007bfdfd0ba10794d4a39194af008f5c7b72c9b6e9386da7a4a0227b19b20884c962d2e2078560c76b2e5a608c4f6dd7b203fdadd31739538aeb5af6c2e26f7b7ac14d",
        cocktail_name_kor: "블루 하와이",
      },
    ],
  };
  const [currentTab, setCurrentTab] = React.useState("liquor");

  return (
    <>
      <MenuTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div>
        <WishItems currentTab={currentTab} obj={dummy[currentTab]} />
      </div>
    </>
  );
}
export default WishlistPage;
