import { InputLabel, MenuItem, Select, FormControl } from "@mui/material";

const liquorClassification = [
  "진",
  "럼",
  "위스키",
  "보드카",
  "테킬라",
  "리큐르",
  "기타",
];

function SelectLiquorClassification() {
  return (
    <FormControl
      variant="standard"
      sx={{ width: "60%", marginTop: "1rem", textAlign: "start" }}
    >
      <InputLabel id="demo-simple-select-standard-label">술 종류</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        label="술 종류"
      >
        {liquorClassification.map((i, index) => {
          return (
            <MenuItem value={index + 1} key={i}>
              {i}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default SelectLiquorClassification;
