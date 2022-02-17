import { Box, makeStyles } from "@mui/material";

const pcStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      maxWidth: "768px",
    },
  },
}));

function BaseComponent() {
  const classes = pcStyles();
  return <Box sx={{ margin: "0 auto" }} className={classes.root}></Box>;
}

export default BaseComponent;
