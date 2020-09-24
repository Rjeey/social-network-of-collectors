import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};

function List(props) {
  return (
    <ul style={styles.ul}>
      {props.purchs.map((purch, index) => {
        return (
          <Item
            data={purch}
            key={purch.id}
            index={index}
            onChange={props.onToggle}
          />
        );
      })}
    </ul>
  );
}

List.propTypes = {
  purchs: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default List;
