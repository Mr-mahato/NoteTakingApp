import React from "react";
import TakeNote from "./TakeNote";

function NoteList({noteList , handelAddedNote , handleDelete}) {

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
      <TakeNote handelAddedNote={handelAddedNote}/>
    </div>
  );
}

export default NoteList;
