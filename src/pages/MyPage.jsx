import GreetingMember from "../components/AuthPage/GreetingMember";
import { Link } from "react-router-dom";
import { IoWaterOutline } from "react-icons/io5";
import { AiOutlineRight } from "react-icons/ai";
import { MyPageMenuItem, MyPageMenuItemTitle } from "../design/AuthPage/MyPage";
function MyPage() {
  const myPageItemList = [
    { link: "wishlist", title: "마시고싶어요" },
    { link: "drank", title: "마셔봤어요" },
    { link: "myreview", title: "내가 쓴 리뷰" },
    { link: "myrecipe", title: "내가 쓴 레시피" },
  ];
  return (
    <div>
      <GreetingMember />
      <ul style={{ margin: 0, padding: 0 }}>
        {myPageItemList.map((item) => (
          <Link to={item["link"]}>
            <MyPageMenuItem>
              <MyPageMenuItemTitle>
                <IoWaterOutline />
                <p>{item["title"]}</p>
              </MyPageMenuItemTitle>
              <p>
                <AiOutlineRight size={20} />
              </p>
            </MyPageMenuItem>
          </Link>
        ))}
      </ul>
    </div>
  );
}
export default MyPage;
