import React from "react";

export default function DetailInfo({ siswa, toggleDetailModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Student Detail</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={toggleDetailModal}
          ></button>
        </div>
        <div className="modal-body">
          <p>
            <strong>Name : </strong> {siswa.name}
          </p>
          <p>
            <strong>NIM : </strong> {siswa.nim}
          </p>
          <p>
            <strong>Class : </strong> {siswa.class}
          </p>
          <p>
            <strong>Year : </strong> {siswa.year}
          </p>
          <p>
            <strong>Guardian Name : </strong> {siswa.guardian_name}
          </p>
          <p>
            <strong>Birth Date : </strong> {siswa.birthDate}
          </p>
          <p>
            <strong>Address : </strong> {siswa.address}
          </p>
          <p>
            <strong>Gender : </strong> {siswa.gender}
          </p>
        </div>
      </div>
    </div>
  );
}
