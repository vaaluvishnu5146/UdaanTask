import React from "react";
import Table from "./components/Table/Table";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Table rows={500} columns={500} />
    </div>
  );
}

export default App;
