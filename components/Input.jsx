import { TextField } from "@mui/material";
import React from "react";

export default function Input({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  height,
  width,
  multiline,
}) {
  return (
    <TextField
      size="small"
      variant="outlined"
      label={label}
      placeholder={placeholder}
      name={name}
      value={value}
      type={type}
      onChange={onChange}
      multiline={multiline}
      rows={5}
      InputLabelProps={type == "date" ? { shrink: true } : {}}
      sx={{
        "& .MuiOutlinedInput-notchedOutline": {
          border: "2px solid gray",
        },
        "& .MuiFormLabel-root": {
          color: "gray",
          textTransform: "capitalize",
        },
        "&:hover": {
          "& .MuiInputBase-root .MuiOutlinedInput-notchedOutline": {
            border: "2px solid cornflowerblue",
          },
          "& .MuiFormLabel-root": {
            color: "cornflowerblue",
          },
        },
        "& .Mui-focused": {
          "& .MuiOutlinedInput-notchedOutline": {
            border: "2px solid cornflowerblue",
          },
        },
        "& .MuiFormLabel-root.Mui-focused": {
          color: "cornflowerblue",
        },
        "& input": {
          color: "white",
          height: height ? height : "auto",
        },
        "& .MuiInputBase-root": {
          color: "white",
        },
        width: width ? width : "100%",
      }}
      fullWidth
    />
  );
}
