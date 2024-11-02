import React from "react";

export default function ModalForm({ isEdit, toogleModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            {isEdit ? "Edit Student" : "Add New Student"} Student
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={toogleModal}
          ></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label htmlFor="name">Student Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nim">Student NIM</label>
              <input type="text" name="nim" id="nim" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="class">Student Class</label>
              <input
                type="text"
                name="class"
                id="class"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="gender">Student Gender</label>
              <select class="form-select" name="gender" id="gender">
                <option selected>Select Gender</option>
                <option value="male">Male</option>
                <option value="famele">Famele</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="class">Year Graduation</label>
              <input
                type="number"
                name="year"
                id="year"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="address">Student Address</label>
              <input
                type="text"
                name="address"
                id="address"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="birthDate">Student Birth</label>
              <input
                type="date"
                name="birthDate"
                id="birthDate"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="guardian_name">Guardian Name</label>
              <input
                type="text"
                name="guardian_name"
                id="guardian_name"
                className="form-control"
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          {isEdit ? (
            <button type="button" className="btn btn-warning">
              <i className="bi bi-pencil-square"></i> Update
            </button>
          ) : (
            <button type="button" className="btn btn-primary">
              <i className="bi bi-save2-fill"></i> Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
