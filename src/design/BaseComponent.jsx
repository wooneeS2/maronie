import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const pcStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      maxWidth: "768px",
    },
  },
}));

function BaseComponent({ children }) {
  const classes = pcStyles();
  return (
    <Box sx={{ margin: "0 auto" }} className={classes.root}>
      {children}
    </Box>
  );
}

export default BaseComponent;
