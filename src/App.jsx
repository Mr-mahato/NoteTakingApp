import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import Search from "./component/Search";
import TakeNote from "./component/TakeNote";
import NoteList from "./component/NoteList";

export default function App() {
  let [note, setNote] = useState([]);

  // this logic handel the taking note process
  const handelAddedNote = (notesTaken) => {
    console.log("hi i am called from the noteList component");
    console.log(notesTaken);
    setNote([...note, notesTaken]);
  };
  const handleDelete = (id) => {
    const newNotes = note.filter((val) => val.id !== id);
    setNote(newNotes);
  };
  
  useEffect(() => {
    note = JSON.parse(localStorage.getItem("Notes"));
    if (note != null) setNote(note);
    else setNote([]);
  }, []);

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(note));
  }, [note]);

  return (
    <div className="w-2/3 mx-auto">
      <Header />
      <Search />
      <NoteList
        noteList={note}
        handelAddedNote={handelAddedNote}
        handleDelete={handleDelete}
      />
    </div>
  );
}
