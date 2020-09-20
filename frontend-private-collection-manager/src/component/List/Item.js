import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: ".5rem",
  },
  input: {
    marginRight: "1rem",
  },
};

function Item({ data, index, onChange }) {
  const { removePurch } = useContext(Context);
  const classes = [];

  if (data.completed) {
    classes.push("done");
  }
  return (
    <li style={styles.li}>
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={data.completed}
          style={styles.input}
          onChange={() => onChange(data.id)}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {data.title}
      </span>

      <button className="rm" onClick={removePurch.bind(null, data.id)}>
        &times;
      </button>
    </li>
  );
}

Item.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default Item;
