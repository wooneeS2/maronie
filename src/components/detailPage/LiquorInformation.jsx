import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import LocalBarOutlinedIcon from "@mui/icons-material/LocalBarOutlined";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Rating,
  styled,
} from "@mui/material";

const liquorRatingMessage = {
  1: "매니아들만 찾아요.",
  2: "호불호가 갈려요.",
  3: "평범해요!",
  4: "대부분 좋아해요.",
  5: "이 술 싫어하는 사람을 본적이 없어요!",
};

export function LiquorInformation({ liquor }) {
  let liquorRating = Math.round(liquor.rating);
  return (
    <>
      <Card sx={{ display: "flex", margin: "2rem" }}>
        <CardMedia
          component="img"
          sx={{ width: "45%", height: "20rem" }}
          image={liquor.img}
          alt="liquor"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography variant="h5" sx={{ display: "flex" }}>
                  {liquor.name}
                  <Typography
                    sx={{
                      margin: "0.5rem",
                    }}
                  >
                    {liquor.classfication}
                  </Typography>
                </Typography>
              </Box>
              <Box sx={{ marginRight: "1rem" }}>
                <StarBorderOutlinedIcon sx={{ marginRight: "1rem" }} />
                <LocalBarOutlinedIcon />
              </Box>
            </Box>
            <Box>
              <Typography
                variant="subtitle1"
                color="theme.primary.main"
                component="div"
              >
                " {liquorRatingMessage[liquorRating]}" ({liquor.rating}점)
              </Typography>
              <Rating
                sx={{ color: "primary.main" }}
                name="half-rating-read"
                defaultValue={liquor.rating}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                readOnly
              />
            </Box>
            <Typography variant="subtitle1" color="text.main" component="div">
              {liquor.description}
            </Typography>
          </CardContent>
          <Box
            sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
          ></Box>
        </Box>
      </Card>
    </>
  );
}

export default LiquorInformation;
