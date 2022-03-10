import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { headerHeightState } from "../../data/state";
import { GrPrevious, GrHomeRounded, GrMenu } from "react-icons/gr";
import MenuList from "./MenuList";
import {
  HeaderButton,
  HeaderDiv,
  HeaderPageName,
} from "../../design/header/HeaderDesign";

const path = {
  "/": "마로니에",
  "/liquor": "상세 정보",
  "/search": "술 검색",
  "/cocktail/register": "칵테일 레시피 추가하기",
  "/liquor/create/review": "리뷰 작성",
  "/signup": "회원가입",
  "/signin": "로그인",
  "/mypage": "마이페이지",
  "/mypage/wishlist": "즐겨찾기",
  "/mypage/donelist": "마셔봤어요",
  "/mypage/review": "내가 작성한 리뷰",
  "/mypage/recipe": "내가 작성한 레시피",
  etc: "",
};

export function Header() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const headerRef = React.useRef(null);
  const setHeaderHeight = useSetRecoilState(headerHeightState);

  const pathName = location.pathname;
  const navigate = useNavigate();
  const handleMenu = () => {
    setVisible(!visible);
  };

  const setPathName = pathName => {
    if (Object.keys(path).includes(pathName) === false) {
      return path["etc"];
    }

    return path[pathName];
  };

  React.useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, []);

  if (pathName === "/") {
    return null;
  }

  return (
    <HeaderDiv style={{ display: "flex" }} ref={headerRef}>
      <HeaderButton
        onClick={() => {
          navigate(-1);
        }}
      >
        <GrPrevious />
      </HeaderButton>

      <HeaderPageName>{setPathName(pathName)}</HeaderPageName>

      <div>
        <HeaderButton>
          <Link to={"/"}>
            <GrHomeRounded />
          </Link>
        </HeaderButton>
        <MenuComponent
          handleMenu={handleMenu}
          visible={visible}
          isLogin={true}
        />
      </div>
    </HeaderDiv>
  );
}

const MenuComponent = ({ handleMenu, visible, isLogin }) => {
  return (
    <>
      <HeaderButton onClick={handleMenu}>
        <GrMenu />
      </HeaderButton>
      <MenuList isLogin={isLogin} visible={visible} />
    </>
  );
};

export default Header;
