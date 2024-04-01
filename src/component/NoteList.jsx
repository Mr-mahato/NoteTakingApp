import React from "react";
import TakeNote from "./TakeNote";

function NoteList() {
  const dataFromLocalStorage = JSON.parse(localStorage.getItem("Notes"));
  const noteList = dataFromLocalStorage == null ? [] : dataFromLocalStorage;

  const handleDelete = (id) => {
    const dataFronLocalStorage = JSON.parse(localStorage.getItem("Notes"));

    const ind = dataFromLocalStorage.findIndex((val) => val.id == id);
    dataFromLocalStorage.splice(ind, 1);
    localStorage.setItem("Notes", JSON.stringify(dataFromLocalStorage));
  };
  const Notes = noteList.map((note) => {
    return (
      <div
        className=" bg-[#FEF68A] flex flex-col   rounded-md w-[270px] h-[300px]  p-4 m-2  mt-10"
        key={note.id}
      >
        <h1>{note.note}</h1>
        <div className="flex  mt-auto justify-between">
          <h1>{note.noteTakenDate}</h1>
          <button
            className="text-red-500 text-2xl"
            onClick={() => handleDelete(note.id)}
          >
            X
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-wrap ">
      {Notes}
      <TakeNote />
    </div>
  );
}

export default NoteList;
