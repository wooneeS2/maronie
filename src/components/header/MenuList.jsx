import React from "react";
import { Link } from "react-router-dom";
import {
  OpenMenu,
  EachMenuBtn,
  MenuBtn,
} from "../../design/header/MenuListDesign";
import { useRecoilState } from "recoil";
import { userState } from "data/state";

const menuList = [
  {
    label: "Home",
    path: "",
  },
  {
    label: "Search",
    path: "search",
  },
  {
    label: "My Page",
    path: "mypage",
  },
  {
    label: "Log In",
    path: "signin",
  },
  {
    label: "Log Out",
    path: "",
  },
];
export default function MenuList({ visible }) {
  const [user, setUser] = useRecoilState(userState);
  //TODO 로그인 로그아웃 버튼 수정...
  //TODO 로그아웃 기능 만들기
  return (
    <>
      <OpenMenu>
        {visible && (
          <MenuBtn>
            {(user === true
              ? menuList.filter(x => x.label !== "Log Out")
              : menuList.filter(x => x.label !== "Log In")
            ).map(x => {
              return (
                <EachMenuBtn key={x.id + x.label}>
                  <Link to={`/${x.path}`}>{x.label}</Link>
                </EachMenuBtn>
              );
            })}
          </MenuBtn>
        )}
      </OpenMenu>
    </>
  );
}
