import React from "react";

export default function TableSiswa({ siswa, toogleModal }) {
  return (
    <div className="container">
      <button
        className="btn btn-success btn-sm mb-3 float-end"
        onClick={() => toogleModal()}
      >
        Tambah Siswa
      </button>

      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Nama</th>
            <th scope="col">NIM</th>
            <th scope="col">Kelas</th>
            <th scope="col">jenis Kelamin</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {siswa.map((siswa, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{siswa.name}</td>
              <td>{siswa.nim}</td>
              <td>{siswa.class}</td>
              <td>{siswa.gender}</td>
              <td>
                <button
                  className="btn btn-light btn-sm me-1"
                  onClick={() => toogleModal(true)}
                >
                  <i className="bi bi-pencil-square"></i>
                  Edit
                </button>
                <button className="btn btn-light btn-sm me-1">
                  <i className="=bi bi-trash "></i> Hapus
                </button>
                <button className="btn btn-light btn-sm ">
                  <i className="bi bi-eye-fill"></i> Lihat
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
