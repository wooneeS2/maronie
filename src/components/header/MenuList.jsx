import React from "react";
import { Link } from "react-router-dom";
import {
  OpenMenu,
  EachMenuBtn,
  MenuBtn,
} from "../../design/header/MenuListDesign";

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
export default function MenuList({ isLogin, userName, LogOut, visible }) {
  return (
    <>
      <OpenMenu>
        {visible && (
          <MenuBtn>
            {(isLogin === true
              ? menuList.filter(x => x.label !== "LogIn")
              : menuList.filter(x => x.label !== "LogOut")
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
