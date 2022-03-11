import GreetingMember from "../components/AuthPage/GreetingMember";
import { Link } from "react-router-dom";
import { IoWaterOutline } from "react-icons/io5";
import { AiOutlineRight } from "react-icons/ai";
import {
  MyPageMenuItem,
  MyPageMenuItemTitle,
} from "../design/AuthPage/MyPageStyles";
function MyPage() {
  const myPageItemList = [
    { link: "wishlist", title: "마시고싶어요" },
    { link: "donelist", title: "마셔봤어요" },
    { link: "review", title: "내가 쓴 리뷰" },
    { link: "recipe", title: "내가 쓴 레시피" },
  ];
  // TODO 디자인 업데이트
  return (
    <div style={{ paddingTop: "80px" }}>
      <GreetingMember />
      <ul style={{ margin: 0, padding: 0 }}>
        {myPageItemList.map(item => (
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
