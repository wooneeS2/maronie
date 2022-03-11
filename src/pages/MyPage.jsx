import GreetingMember from "../components/AuthPage/GreetingMember";
import { AiOutlineRight } from "react-icons/ai";
import {
  MyPageMenuItem,
  MyPageMenuItemTitle,
} from "../design/AuthPage/MyPageStyles";
import { StyledLink } from "design/AuthPage/SignInPageStyles";
import {
  MdLiquor,
  MdOutlineStickyNote2,
  MdOutlineReviews,
} from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";

function MyPage() {
  const myPageItemList = [
    {
      link: "wishlist",
      title: "마시고싶어요",
      icon: <AiFillHeart size={20} />,
    },
    { link: "donelist", title: "마셔봤어요", icon: <MdLiquor size={20} /> },
    {
      link: "review",
      title: "내가 쓴 리뷰",
      icon: <MdOutlineReviews size={20} />,
    },
    {
      link: "recipe",
      title: "내가 쓴 레시피",
      icon: <MdOutlineStickyNote2 size={20} />,
    },
  ];

  return (
    <div style={{ marginTop: "81px" }}>
      <GreetingMember />
      <ul style={{ margin: "15px", padding: 0 }}>
        {myPageItemList.map((item, idx) => (
          <StyledLink to={item["link"]} key={`mypage-menu-${idx}`}>
            <MyPageMenuItem>
              <MyPageMenuItemTitle>
                <div style={{ marginRight: "5px" }}>{item["icon"]}</div>
                <p>{item["title"]}</p>
              </MyPageMenuItemTitle>
              <p>
                <AiOutlineRight size={20} />
              </p>
            </MyPageMenuItem>
          </StyledLink>
        ))}
      </ul>
    </div>
  );
}
export default MyPage;
