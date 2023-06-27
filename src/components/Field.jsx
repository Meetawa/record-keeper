import React from "react";

const Field = ({ index, name, email }) => {
  return (
    <div className="data-val">
      <h3>{name}</h3>
      <h3>{email}</h3>
      <h3>Remove</h3>
    </div>
  );
};

export default Field;
