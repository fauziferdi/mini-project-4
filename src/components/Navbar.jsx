import React from "react";

export default function Navbar({ addSiswa, editSiswa }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          Data Siswa SMKN 1 Zimbawe
        </a>
        <button onClick={() => addSiswa()}>
          <i className="bi bi-list"> tambah </i>
        </button>
        <button onClick={() => editSiswa()}>
          <i className="bi bi-list"> edit </i>
        </button>
      </div>
    </nav>
  );
}
