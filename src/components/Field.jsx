import React from "react";

const Field = ({ name, email, index }) => {
  return (
    <div className="data-val">
      <h3>{name}</h3>
      <h3>{email} </h3>
      <h3>Remove</h3>
    </div>
  );
};

export default Field;
