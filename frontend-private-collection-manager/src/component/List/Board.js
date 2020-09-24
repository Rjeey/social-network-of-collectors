import React, { useEffect } from "react";
import List from "./List";
import Context from "../context";
import Loader from "../Loader";
import Modal from "../model/Modal";
import { Link } from "react-router-dom";

const AddItem = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("./AddItem"));
      }, 3000);
    })
);

function Boadr() {
  const [purchs, setPurchs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((purchs) => {
        setTimeout(() => {
          setPurchs(purchs);
          setLoading(false);
        }, 2000);
      });
  }, []);

  function toggleData(id) {
    setPurchs(
      purchs.map((purch) => {
        if (purch.id === id) {
          purch.completed = !purch.completed;
        }
        return purch;
      })
    );
  }

  function removePurch(id) {
    setPurchs(purchs.filter((purch) => purch.id !== id));
  }

  function addItem(title) {
    setPurchs(
      purchs.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removePurch }}>
      <div className="wrapper">
        <h1>React </h1>
        <Modal />
        <React.Suspense fallback={<Loader />}>
          <AddItem onCreate={addItem} />
        </React.Suspense>
        {loading && <Loader />}
        {purchs.length ? (
          <List purchs={purchs} onToggle={toggleData} />
        ) : loading ? null : (
          <p> no purchs!</p>
        )}
        <Link to="/">Login</Link>
      </div>
    </Context.Provider>
  );
}

export default Boadr;
