import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import TableContainer from "./containers/TableContainer";

function App() {
  return (
    <div className="container-fluid">
      <TableContainer />
    </div>
  );
}

export default App;
