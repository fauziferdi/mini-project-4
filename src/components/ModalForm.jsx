import React from "react";

export default function ModalForm({
  isEdit,
  toogleModal,
  handleChange,
  cekForm,
  handleSubmit,
  form,
  errors,
}) {
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
                onChange={handleChange}
              />
              {errors.name && <div className="text-danger">{errors.name}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="nim">Student NIM</label>
              <input
                type="text"
                name="nim"
                id="nim"
                className="form-control"
                onChange={handleChange}
              />
              {errors.nim && <div className="text-danger">{errors.nim}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="class">Student Class</label>
              <input
                type="text"
                name="class"
                id="class"
                className="form-control"
                onChange={handleChange}
              />
              {errors.class && (
                <div className="text-danger">{errors.class}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="gender">Student Gender</label>
              <select
                className="form-select"
                name="gender"
                id="gender"
                onChange={handleChange}
              >
                <option defaultValue="0">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && (
                <div className="text-danger">{errors.gender}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="class">Year Join</label>
              <input
                type="number"
                name="year"
                id="year"
                className="form-control"
                onChange={handleChange}
              />
              {errors.year && <div className="text-danger">{errors.year}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="address">Student Address</label>
              <textarea
                name="address"
                id="address"
                className="form-control"
                onChange={handleChange}
              ></textarea>
              {errors.address && (
                <div className="text-danger">{errors.address}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="birthDate">Student Birth</label>
              <input
                type="date"
                name="birthDate"
                id="birthDate"
                className="form-control"
                onChange={handleChange}
              />
              {errors.birthDate && (
                <div className="text-danger">{errors.birthDate}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="guardian_name">Guardian Name</label>
              <input
                type="text"
                name="guardian_name"
                id="guardian_name"
                className="form-control"
                onChange={handleChange}
              />
              {errors.guardian_name && (
                <div className="text-danger">{errors.guardian_name}</div>
              )}
            </div>
          </form>
        </div>
        <div className="modal-footer">
          {isEdit ? (
            <button type="button" className="btn btn-warning">
              <i className="bi bi-pencil-square"></i> Update
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              <i className="bi bi-save2-fill"></i> Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
