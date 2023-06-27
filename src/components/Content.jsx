import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const Content = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");

  function addData() {
    setData([
      ...data,
      {
        name,
        email,
      },
    ]);
    setName("");
    setEmail("");
  }

  return (
    <div className="form">
      <Stack direction="row" spacing={2}>
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="outlined-basic"
          label="Gmail"
          variant="outlined"
        />
        <Button onClick={addData} variant="contained" color="success">
          ADD
        </Button>
      </Stack>

      {/* Data */}

      <div className="data">
        <div className="data-val">
          <h3>Name</h3>
          <h3>Email id </h3>
          <h3>Remove</h3>
        </div>
      </div>
    </div>
  );
};

export default Content;
