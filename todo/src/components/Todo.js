import React from "react";

const Todo = (props) => {
  return (
    <>
      <div className="style">
        <li>
          <span onClick={()=>{
            props.onSelect(props.id)
          }}><button style={{backgroundColor: "#f4f4f4"}}>❌</button></span>
          {props.text}
        </li>
      </div>
    </>
  );
};

export default Todo;
