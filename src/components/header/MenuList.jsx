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
    path: "logout",
  },
];
export default function MenuList({ visible }) {
  const [user] = useRecoilState(userState);
  const [isLogin, setIsLogin] = React.useState(false);
  React.useEffect(() => {
    if (user === null) {
      return setIsLogin(false);
    }
    if (user !== null) {
      return setIsLogin(true);
    }
  }, [user]);

  return (
    <>
      <OpenMenu>
        {visible && (
          <MenuBtn>
            {(isLogin === true
              ? menuList.filter(x => x.label !== "Log In")
              : menuList.filter(x => x.label !== "Log Out")
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
