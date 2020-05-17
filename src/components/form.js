import React, { useState } from "react";

const Form = ({ onFilter }) => {
  const [name, setName] = useState("");
  const handelChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="input-group m-2">
      <input
        className="form-control"
        onChange={handelChange}
        value={name}
        placeholder="Filter by name"
      />
      <button
        className="btn input-group-prepend ml-2 btn-md btn-success"
        onClick={(e) => {
          e.preventDefault();
          onFilter(name);
        }}
      >
        Filter
      </button>
    </div>
  );
};

export default Form;
