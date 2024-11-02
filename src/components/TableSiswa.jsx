import React from "react";

export default function TableSiswa({ siswa }) {
  return (
    <div className="container">
      <button className="btn btn-success btn-sm mb-3 float-end">
        Tambah Siswa
      </button>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@fat"
      >
        Open modal for @fat
      </button>
      <table class="table table-dark table-striped">
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
                <button className="btn btn-light btn-sm me-1">
                  <i class="bi bi-pencil-square"></i> Edit
                </button>
                <button className="btn btn-light btn-sm me-1">
                  <i class="=bi bi-trash "></i> Hapus
                </button>
                <button className="btn btn-light btn-sm ">
                  <i class="bi bi-eye-fill"></i> Lihat
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
