import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const Content = () => {
  return (
    <div className="form">
      <Stack direction="row" spacing={2}>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Gmail" variant="outlined" />
        <Button variant="contained" color="success">
          ADD
        </Button>
      </Stack>
    </div>
  );
};

export default Content;
