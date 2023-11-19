import React from "react";
import ListCards from "./ListCards";
import "./App.css";
import SearchInput from "./SearchInput";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="container-fluid pt-4">
      <div className="row bg-body-tertiary p-2">
        <div className="col d-flex justify-content-end">
          <SearchInput value={search} setValue={setSearch} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ListCards search={search} />;
        </div>
      </div>
    </div>
  );
};

export default App;
