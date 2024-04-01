import React, { useState } from "react";

function TakeNote() {
  const [wordCount, setWordCount] = useState(200);
  const [note, setNote] = useState("");
  const handelChange = (e) => {
    setNote(e.target.value);
    setWordCount(200 - e.target.value.length);
  };

  const handelAddedNote = () => {
    if (note.length == 0) {
      alert("add some notes");
      return;
    }
    const dataFromLocalStorage = JSON.parse(localStorage.getItem("Notes"));
    const noteList = dataFromLocalStorage == null ? [] : dataFromLocalStorage;
    const id = Math.floor(Math.random() * 1000);
    const today = new Date();
    const noteTakenDate = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;
    noteList.push({ note, id, noteTakenDate });
    localStorage.setItem("Notes", JSON.stringify(noteList));
    setNote("");
  };

  return (
    <div className="bg-[#67D7CC] rounded-md w-[270px] h-[300px] m-2  mt-10">
      <textarea
        cols="20"
        rows="8"
        value={note}
        readOnly={wordCount == 0}
        onChange={handelChange}
        placeholder="Take a note..."
        className={`resize-none w-full h-[250px]  bg-[#67D7CC]  outline-none   rounded  p-2`}
      ></textarea>
      <div className="flex  p-2 justify-between">
        <h1 className="">{wordCount} remaining</h1>
        <button onClick={handelAddedNote} className=" bg-white px-2 rounded-lg">
          Save
        </button>
      </div>
    </div>
  );
}

export default TakeNote;
