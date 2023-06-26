import React from "react";
import Header from "./Header";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const RecordKeeperIndex = () => {
  return (
    <>
      <Header />
      <div>
        <Stack direction="row" spacing={2}>
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="Gmail" variant="outlined" />
          <Button variant="contained" color="success">
            ADD
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default RecordKeeperIndex;
