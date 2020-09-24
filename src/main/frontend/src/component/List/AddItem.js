import React, { useState } from "react";
import PropTypes from "prop-types";

function useInputValue(dafaultValue = "") {
  const [value, setValue] = useState(dafaultValue);
  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

function AddItem({ onCreate }) {
  const input = useInputValue("");

  function submitHandler(event) {
    event.preventDefault();

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }

  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
      <input {...input.bind} />
      <button type="submit">Add Item</button>
    </form>
  );
}

AddItem.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddItem;
