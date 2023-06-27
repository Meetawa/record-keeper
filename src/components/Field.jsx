import React from "react";

const Field = ({ data }) => {
  return (
    <>
      {data.map((element, index) => {
        return (
          <div className="data-val" key={index}>
            <h3>{element.name}</h3>
            <h3>{element.email}</h3>
            <h3>Remove</h3>
          </div>
        );
      })}
    </>
  );
};

export default Field;
