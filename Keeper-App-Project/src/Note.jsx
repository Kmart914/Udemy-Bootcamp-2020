import React from "react";
import Notes from "./notes.js";

function Note(props){
  return(

    <div className="noteBox">
    <p className="noteTitle">{props.title}</p>
    <p>{props.content}</p>

    </div>

  );
}

export default Note;
