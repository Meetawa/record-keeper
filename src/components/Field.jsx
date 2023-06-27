import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import DeleteIcon from "@mui/icons-material/Delete";

const Field = ({ index, name, email }) => {
  return (
    <div className="data-val">
      <h3>{name}</h3>
      <h3>{email}</h3>
      <Stack>
        <Button variant="outlined" color="error">
          <DeleteIcon />
        </Button>
      </Stack>
    </div>
  );
};

export default Field;
