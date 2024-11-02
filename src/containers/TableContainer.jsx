import React, { Component } from "react";
import { allSiswa, addSiswa, updateSiswa } from "../utils/api";
import TableSiswa from "../components/TableSiswa";
import Navbar from "../components/Navbar";
import ModalForm from "../components/ModalForm";

export default class TableContainer extends Component {
  state = {
    form: {
      nim: "",
      name: "",
      class: "",
      year: "",
      guardian_name: "",
      birthDate: "",
      address: "",
      gender: "",
    },
    siswa: [],
    isEdit: true,
    showModal: false,
    errors: {},
  };

  componentDidMount() {
    this.showAllSiswa();
  }

  showAllSiswa() {
    allSiswa()
      .then((response) => {
        this.setState({ siswa: response.data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  handleChange = (e) => {
    this.setState({ errors: {} });
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  toogleModal = (isEdit = false) => {
    this.setState({
      isEdit,
      showModal: !this.state.showModal,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.isEdit) {
      this.editSiswa(this.state.form, this.state.form.id);
    } else {
      this.addSiswa(this.state.form);
    }
    console.log(this.state.form);
  };

  addSiswa = (data) => {
    addSiswa(data)
      .then((response) => {
        console.log("Siswa berhasil ditambahkan:", response);
        this.setState({ showModal: false }); // Tutup modal
        this.showAllSiswa(); // Refresh data tabel
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          const errorData = error.response.data;
          console.error(errorData.message);
          const newErrors = {};
          errorData.data.forEach((err) => {
            newErrors[err.path] = err.msg;
          });
          this.setState({ errors: newErrors });
        } else {
          console.error("Gagal menambahkan siswa:", error);
        }
      });
  };

  editSiswa = (data, id) => {
    updateSiswa(data, id)
      .then((response) => {
        console.log("Siswa berhasil diperbarui:", response);
        this.setState({ showModal: false }); // Tutup modal
        this.showAllSiswa(); // Refresh data tabel
      })
      .catch((error) => {
        console.error("Gagal memperbarui siswa:", error);
      });
  };

  render() {
    return (
      <>
        <Navbar addSiswa={this.addSiswa} editSiswa={this.editSiswa} />
        <TableSiswa siswa={this.state.siswa} toogleModal={this.toogleModal} />
        {this.state.showModal && (
          <ModalForm
            isEdit={this.state.isEdit}
            toogleModal={this.toogleModal}
            handleChange={this.handleChange}
            cekForm={this.cekForm}
            form={this.state.form}
            handleSubmit={this.handleSubmit}
            errors={this.state.errors}
          />
        )}
      </>
    );
  }
}
