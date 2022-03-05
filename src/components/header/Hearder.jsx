import React, { useState } from "react";
import styled from "styled-components";
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

  const setPathName = (pathName) => {
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

  return (
    <HeaderDiv style={{ display: "flex" }} ref={headerRef}>
      {pathName !== "/" ? (
        <HeaderButton
          onClick={() => {
            navigate(-1);
          }}
        >
          <GrPrevious />
        </HeaderButton>
      ) : (
        <BlankDiv />
      )}
      <HeaderPageName>{setPathName(pathName)}</HeaderPageName>

      <div>
        <HeaderButton>
          <Link to={"/"}>
            <GrHomeRounded />
          </Link>
        </HeaderButton>

        <HeaderButton onClick={handleMenu}>
          <GrMenu />
        </HeaderButton>
        <MenuList isLogin={true} visible={visible} />
      </div>
    </HeaderDiv>
  );
}

const BlankDiv = styled.div`
  width: 82px;
`;

export default Header;
