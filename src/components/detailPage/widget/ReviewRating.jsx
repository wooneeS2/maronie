import { styled as muiStyled } from "@mui/material/styles";
import { Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { mainRed } from "../../../design/colorPalette";

export const StyledRating = muiStyled(Rating)({
  "& .MuiRating-iconFilled": {
    color: `${mainRed}`,
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

export const ReviewRating = ({ onChange, onChangeActive }) => {
  return (
    <StyledRating
      name="half-rating-read"
      sx={{
        fontSize: "2.5rem",
        margin: "0 auto",
      }}
      defaultValue={0}
      precision={0.5}
      icon={<FavoriteIcon fontSize="inherit" color={mainRed} />}
      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      onChange={onChange}
      onChangeActive={onChangeActive}
    />
  );
};

export const ReadOnlyRating = ({ ratingValue, fontSize }) => {
  return (
    <StyledRating
      name="half-rating-read"
      sx={{
        fontSize: { fontSize },
      }}
      defaultValue={ratingValue}
      precision={0.5}
      icon={<FavoriteIcon fontSize="inherit" color={mainRed} />}
      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      readOnly
    />
  );
};
