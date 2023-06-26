import React from "react";
import Header from "./Header";
import TextField from "@mui/material/TextField";

const RecordKeeperIndex = () => {
  return (
    <>
      <Header />
      <TextField id="outlined-basic" label="Name" variant="outlined" />
    </>
  );
};

export default RecordKeeperIndex;
