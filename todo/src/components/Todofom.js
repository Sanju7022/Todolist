import React from "react";
import Todo from "./Todo";
import { useState } from "react";

const Todofom = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  };
  const listOfItems = () => {
    if(!inputList){

    }else{
        setItems((oldItems) => {
            return [...oldItems, inputList];
          });
          setInputList("");
    }
    
  };
  const deleteHandler = (id) => {
    // console.log("deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrEle, index)=>{
       return index !==id;
      })
    })
  };
  const removeAll = () => {
    setItems([]);
  };

  return (
    <div>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1> ToDo list</h1>
          <br />
          <input
            type="text"
            placeholder="Add todo"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={listOfItems}>Add</button>

          <ol>
            {/* <li> {inputList}</li> */}
            {items.map((itemval, index) => {
              return (
                <Todo
                  text={itemval}
                  key={index}
                  id={index}
                  onSelect={deleteHandler}
                ></Todo>
              );
            })}
          </ol>
          <button onClick={removeAll}>Remove all</button>
        </div>
      </div>
    </div>
  );
};

export default Todofom;
