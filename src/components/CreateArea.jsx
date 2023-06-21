import React from "react";
import ReactDOM from "react-dom";

export default function CreateArea(props) {
  const [noteElement, setNoteElement] = React.useState({
    title: "",
    content: "",
  });
  {
    /* update the State memory object with userInput */
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    console.log(event.target.name);
    setNoteElement((prevNoteElement) => ({
      ...prevNoteElement,
      [name]: value,
    }));
  };

  {
    /* Create a New Note*/
  }

  const createNewNoteElement = (event) => {
    {
      /*by setting the noteElement to "", clean the input field*/
    }
    setNoteElement({
      title: "",
      content: "",
    });
    props.onAdd(noteElement);
    event.preventDefault();
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          value={noteElement.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={noteElement.content}
          onChange={handleChange}
          placeholder="Take a note"
          rows="4"
        />
        <button onClick={createNewNoteElement}>Add</button>
      </form>
    </div>
  );
}
