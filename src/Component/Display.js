import React, { useState } from "react";
import data from "./Data";
import Info from "./Info";

function Display() {
    const [items, setItems] = useState(data);
 
function deleteNote(id){
    setItems((items) => items.filter((dataItem, index) => index !== id));
}


  return (
    <div>
      <h2>This is Display Component</h2>
      <div >
      {items.map((dataItem, index) => (
        <Info
        key={dataItem.id}
        // id={dataItem.id}
        user={dataItem.userId}
          title={dataItem.title}
          body={dataItem.body}
          onDelete={deleteNote}
          index={index}
        />
      ))}
      </div>

     
    </div>
  );
}
export default Display;
