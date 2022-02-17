import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

export function ParingInformation({ parings }) {
  return (
    <>
      <Typography
        sx={{ margin: "2rem", marginBottom: "-2rem", color: "orange.main" }}
      >
        마로니에가 추천하는 어울리는 안주✨
      </Typography>
      <Card sx={{ display: "flex", flexDirection: "row", margin: "2rem" }}>
        {parings.map((i, index) => {
          return (
            <CardContent id="paringInformation" key={i.img}>
              <CardMedia
                component="img"
                src={i.img}
                alt={`parings${index + 1}`}
                sx={{ widht: "30%", height: "10rem" }}
              />
              <Typography
                sx={{ textAlign: "center" }}
                id={`parings${index + 1}`}
              >
                {i.name}
              </Typography>
            </CardContent>
          );
        })}
      </Card>
    </>
  );
}

export default ParingInformation;
