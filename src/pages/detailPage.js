import React from "react";
import { Rating, Stack } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  MdOutlineCreate,
  MdAdd,
  MdFavoriteBorder,
  MdFavorite,
} from "react-icons/md";

export function DetailPage() {
  return (
    <div>
      <div id="liquorInformation">
        <div id="liquorImage">
          <button>
            <MdFavoriteBorder />
          </button>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIBByFXqccB-GlmMo-ThpQfcG2CFLS6FQaQ&usqp=CAU"
            alt="양주사진"
          />
        </div>
        <div>
          <p>술 이름</p>
          <div>4.5점</div>
          <p>
            설명Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            iusto rem ut voluptatem, nisi, sed deserunt velit quis earum eos
            recusandae iure fugit sapiente dicta quisquam consectetur asperiores
            quos beatae!
          </p>
        </div>
        <div id="paringInformation">
          <img
            src="https://e7.pngegg.com/pngimages/935/770/png-clipart-pizza-pizza.png"
            alt="paring1"
          />
          <p id="paring1">피자</p>
          <img
            src="https://w.namu.la/s/c4b8eb1c9ea25c0e252b81e3aab503097fdd7a7ae00acdba6f86da4e46ad5e3629335e1022104c01db12954074159679a427e9d4f2e0519db064e4203dec3dc04fdbf124789ea8400b3e6793f77a221e"
            alt="paring2"
          />
          <p id="paring2">치킨</p>
          <img
            src="https://w7.pngwing.com/pngs/460/850/png-transparent-french-fries-nachos-vegetarian-cuisine-mexican-cuisine-taco-cheese-food-cheese-cuisine.png"
            alt="paring3"
          />
          <p id="paring3">나쵸</p>
        </div>
        <div id="cocktailInformation">
          <button>
            <MdAdd />
          </button>
          <div id="cocktailImage">
            <button>
              <MdFavoriteBorder />
            </button>
            <img
              src="https://cphoto.asiae.co.kr/listimglink/1/2021012910545251940_1611885291.jpg"
              alt="칵테일1"
            />
          </div>
          <p id="cocktailName">프렌치키스</p>
          <p id="cocktailLevel">상</p>
          <img
            src="https://t1.daumcdn.net/cfile/blog/023C084E51A43CAB31"
            alt="칵테일2"
          />
          <img
            src="https://bakeitwithlove.com/wp-content/uploads/2019/12/Cosmopolitan-tall-400x600.jpg"
            alt="칵테일3"
          />
        </div>
        <div id="liquorReview">
          <p id="liquorRating">4.5</p>
          <Stack spacing={1}>
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              icon={<FavoriteIcon fontSize="inherit" color="#ff6d75" />}
              emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
              readOnly
            />
          </Stack>
          <Stack spacing={3}>
            <div>
              <p id="reviewUser">lorem</p>
              <p id="userRating">좋아요!</p>
              <p id="reviewContent">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt fuga, doloremque totam quisquam ratione harum
                laboriosam dolores reiciendis ea. Sunt aspernatur temporibus
                recusandae ratione harum! Deserunt quia amet eum unde!
              </p>
            </div>
            <div>
              <p id="reviewUser">lorem</p>
              <p id="userRating">좋아요!</p>
              <p id="reviewContent">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt fuga, doloremque totam quisquam ratione harum
                laboriosam dolores reiciendis ea. Sunt aspernatur temporibus
                recusandae ratione harum! Deserunt quia amet eum unde!
              </p>
            </div>
            <div>
              <p id="reviewUser">lorem</p>
              <p id="userRating">좋아요!</p>
              <p id="reviewContent">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt fuga, doloremque totam quisquam ratione harum
                laboriosam dolores reiciendis ea. Sunt aspernatur temporibus
                recusandae ratione harum! Deserunt quia amet eum unde!
              </p>
            </div>
          </Stack>
        </div>
        <button>
          <MdOutlineCreate />
        </button>
      </div>
    </div>
  );
}
