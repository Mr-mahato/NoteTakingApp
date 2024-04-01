import React from "react";
import Header from "./component/Header";
import Search from "./component/Search";
import TakeNote from "./component/TakeNote";
import NoteList from "./component/NoteList";

export default function App() {
  return (
    <div className="w-2/3 mx-auto">
      <Header />
      <Search />
      <NoteList/>
    </div>
  );
}
