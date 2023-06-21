import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";

export default function App() {
  const [noteArr, setNoteArr] = React.useState([]);
  {
    /* feature 1: Add New Note to the State Memory
    ! we need to drop this function to the child component to Create a new note*/
  }
  const addNote = (newNoteElement) => {
    setNoteArr((prevNoteArr) => {
      return [...prevNoteArr, newNoteElement];
    });
  };

  {
    /* feature 2: Delete Note from the State Memory */ {
    }
  }
  const deleteNote = (id) => {
    setNoteArr((prevNoteArr) => {
      return prevNoteArr.filter((_, index) => {
        return index !== id;
      });
    });
  };

  {
    /* Display the notes */
  }
  const notes = noteArr.map((noteItem, index) => {
    return (
      <Note
        key={index}
        id={index}
        title={noteItem.title}
        content={noteItem.content}
        onDelete={deleteNote}
      />
    );
  });
  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes}
      <Footer />
    </>
  );
}
