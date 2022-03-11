import React from "react";
import { Link } from "react-router-dom";
import {
  OpenMenu,
  EachMenuBtn,
  MenuBtn,
  MenuIconStyle,
} from "../../design/header/MenuListDesign";
import { useRecoilState } from "recoil";
import { userState } from "data/state";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

const menuList = [
  {
    label: "Home",
    path: "",
    icon: <HomeOutlinedIcon style={MenuIconStyle} />,
  },
  {
    label: "Search",
    path: "search",
    icon: <SearchOutlinedIcon />,
  },
  {
    label: "My Page",
    path: "mypage",
    icon: <PersonOutlineOutlinedIcon />,
  },
  {
    label: "Log In",
    path: "signin",
    icon: <LockOpenOutlinedIcon />,
  },
  {
    label: "Log Out",
    path: "logout",
    icon: <LoginOutlinedIcon />,
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
                  <Link to={`/${x.path}`}>
                    {x.icon}
                    {x.label}
                  </Link>
                </EachMenuBtn>
              );
            })}
          </MenuBtn>
        )}
      </OpenMenu>
    </>
  );
}
