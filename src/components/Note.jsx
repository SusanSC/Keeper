import React, { useState } from "react";
//This is material icons from https://mui.com/ which was installed using npm (see dependencies), allows us to use pre-designed icons on our website as react components
//The benefit of it is that we can add icons in react that have functionality, adding them in our JS, which we cant do using bootstrap, favicons etc
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
