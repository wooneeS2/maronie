import React from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "../../data/state";
import { IoTrashOutline } from "react-icons/io5";
import {
  WishItemsContainer,
  WishItemsImage,
} from "../../design/AuthPage/WishlistPageStyles";
import { StyledLink } from "../../design/commonStyles";
import NoItem from "./NoItem";
import Loading from "../../components/Loading";
function WishItems({ currentTab }) {
  const [user, setUser] = useRecoilState(userState);
  const [isLoading, setIsLoading] = React.useState(null);
  const [wishlistData, setWishlistData] = React.useState({});

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    if (window.confirm("정말 삭제하시겠습니까?")) {
      await axios
        .delete(
          process.env.REACT_APP_DB_HOST +
            `mypage/wishlist/delete/${user["id"]}/${currentTab}/${id}`
        )
        .then(() => {
          alert("삭제 성공!");
          let newCurrentList = wishlistData[currentTab].filter(
            (item) => item["id"] !== id
          );
          const newWishlistData = {
            ...wishlistData,
            [currentTab]: [...newCurrentList],
          };
          setWishlistData(newWishlistData);
        })
        .catch((e) => {
          console.log(e);
          alert("오류가 발생했습니다, 잠시후에 다시 시도해주세요!");
        });
    }
  };
  React.useEffect(() => {
    if (user === null) {
      alert("회원 전용 기능입니다, 로그인 해주세요!");
      return;
    }
    const call = async () => {
      try {
        setIsLoading(true);
        const response = await axios
          .get(process.env.REACT_APP_DB_HOST + `mypage/wishlist/${user["id"]}`)
          .then((res) => res.data);
        setWishlistData(response);
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    };
    call();
  }, [currentTab]);

  if (isLoading) {
    return <Loading />;
  }
  if (wishlistData[currentTab]?.length === 0) {
    return <NoItem page="wishlist" />;
  }
  return (
    <WishItemsContainer>
      {wishlistData[currentTab]?.map((item, idx) => (
        <div
          style={{
            borderRadius: "5px",
            textAlign: "center",
            margin: "10px",
            padding: "10px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 1px 10px 0px",
          }}
          key={`wishlist-${idx}`}
        >
          <div style={{ textAlign: "right" }}>
            <IoTrashOutline
              size={20}
              onClick={(e) => {
                handleDelete(e, item[`id`]);
              }}
            />
          </div>
          <StyledLink to={`/${currentTab}/` + item[`${currentTab}_id`]}>
            <WishItemsImage
              src={process.env.REACT_APP_DB_IMG + item["image_path"]}
              alt={item[`${currentTab}_name_kor`] + " 이미지"}
            />
          </StyledLink>
          <StyledLink to={`/${currentTab}/` + item[`${currentTab}_id`]}>
            <p style={{ fontWeight: 600, fontSize: "1.1rem" }}>
              {item[`${currentTab}_name_kor`]}
            </p>
          </StyledLink>
        </div>
      ))}
    </WishItemsContainer>
  );
}
export default WishItems;
