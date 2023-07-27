import React, { useState } from "react";
//Adds the add button from material icon
import AddIcon from "@mui/icons-material/Add";
//Adds animation to the add button using Floating animation button (fab)
import Fab from "@mui/material/Fab";
//Adds animation to the add button zooming in when clicking on the text box
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [inputsText, setInputsText] = useState({
    title: "",
    content: "",
  });

  const [clickExpand, setClickExpand] = useState(false);

  function handleClickExpand() {
    setClickExpand(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setInputsText((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form
        className="create-note"
        onSubmit={(event) => {
          props.onAdd(inputsText);
          setInputsText({
            title: "",
            content: "",
          });
          event.preventDefault();
        }}
      >
        {clickExpand ? (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={inputsText.title}
          />
        ) : null}

        <textarea
          onClick={handleClickExpand}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={clickExpand ? 3 : 1}
          value={inputsText.content}
        />
        <Zoom in={clickExpand}>
          <Fab type="Submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
