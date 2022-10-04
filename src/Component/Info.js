import React from "react";


function Info(props) {
    function handleClick() {
        props.onDelete(props.index);
      }  
  return (
    <div className="designInfo">
      <p>
        {(props.index)+1}. User No. {props.user} <button onClick={handleClick}>X</button>
      </p>
      <p>Title: {props.title} :</p>
      <p>Post: {props.body}</p>
    
    </div>
  );
}

export default Info;
