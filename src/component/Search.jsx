import React, { useState } from "react";

function Search() {
  const [searchNote, setSerachNote] = useState("");
  return (
    <section className="input box  mt-4 mx-auto">
      <input
        type="text"
        value={searchNote}
        onChange={(e) => setSerachNote(e.target.value)}
        className="w-full outline-none rounded  p-2 border"
        placeholder="Search Note"
      />
    </section>
  );
}

export default Search;
