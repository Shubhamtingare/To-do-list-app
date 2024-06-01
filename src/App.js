import "./App.css";
import { useState } from "react";

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const showList = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItem = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="main-body">
          <div>
            <input
              type="text"
              name="item"
              id="itemName"
              placeholder="Add a item"
              value={inputList}
              onChange={itemEvent}
            />
            <button onClick={showList}>
              <i className="fa-solid fa-plus plus"></i>
            </button>
          </div>
          <div className="item-list">
            <ol>
              {/*  */}

              {items.map((itemval, index) => {
                return (
                  <>
                    <div className="cross" key={index}>
                      <i
                        onClick={()=> deleteItem(index)}
                        className="fa-solid fa-circle-xmark cross-icon"
                        
                      ></i>
                      <li key={index}>{itemval}</li>
                    </div>
                  </>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
