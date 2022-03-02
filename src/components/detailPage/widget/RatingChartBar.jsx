import styled from "styled-components";
import { mainYellowDark } from "../../../design/colorPalette";

export const RatingChartBar = ({ ratingCount }) => {
  return (
    <div
      style={{
        display: "flex",
        margin: "4px 0",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "30%",
          justifyContent: "flex-end",
          color: "#f1a90d",
        }}
      >
        {"★".repeat(ratingCount.rating)}
      </div>
      <div
        style={{
          width: "50%",
          height: "16px",
          backgroundColor: "#f7f3f0",
          borderRadius: "5px",
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        <div
          style={{
            width: `${ratingCount.count}%`,
            height: "16px",
            backgroundColor: `${mainYellowDark}`,
            display: "flex",
          }}
        />
      </div>
      <span style={{ display: "flex", fontSize: "0.8rem" }}>
        {ratingCount.count}
      </span>
    </div>
  );
};

export default RatingChartBar;
