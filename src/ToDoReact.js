import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import "./App.css";
import List from "./List";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function ToDoReact() {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const showList = () => {
    setNewItem((preVal) => {
      return [...preVal, item];
    });
    setItem("");
  };

  return (
    <div className="container">
      <div className="heading">
        <h1 className="">TO DO LIST</h1>
      </div>
      <div className="main-body">
        <div>
          <input
            type="text"
            placeholder="Add a item"
            value={item}
            onChange={itemEvent}
          />
          <Button
            variant="contained"
            color="success"
            style={{ borderRadius: "50%", height: "45px" }}
            onClick={showList}
          >
            <AddIcon />
          </Button>
        </div>
        <div className="item-list">
          <ol>
            {newItem.map((val, index) => {
              return <List key={index} text={val} />;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
