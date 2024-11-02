import React, { Component } from "react";
import {
  allSiswa,
  addSiswa,
  updateSiswa,
  getSiswaById,
  deleteSiswa,
} from "../utils/api";
import Swal from "sweetalert2";
import TableSiswa from "../components/TableSiswa";
import Navbar from "../components/Navbar";
import ModalForm from "../components/ModalForm";
import DetailInfo from "../components/DetailInfo";

export default class StudentContainet extends Component {
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
    selectedSiswa: null,
    showDetailModal: false,
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

  toogleModal = (isEdit = false, siswaId = null) => {
    if (isEdit && siswaId) {
      getSiswaById(siswaId)
        .then((response) => {
          this.setState({
            form: response.data,
            isEdit,
            showModal: !this.state.showModal,
          });
        })
        .catch((error) => {
          console.error("Error fetching siswa:", error);
        });
    } else {
      this.setState({
        isEdit,
        showModal: !this.state.showModal,
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
      });
    }
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
        Swal.fire({
          icon: "success",
          title: "Data Siswa berhasil ditambahkan",
          width: 300,
          heightAuto: false,
          showConfirmButton: false,
          timer: 1000,
        });
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
          Swal.fire({
            icon: "error",
            title: "Maaf",
            text: "Anda Gagal Menambah data siswa",
            width: 300,
            heightAuto: false,
          });
          console.error("Gagal menambahkan siswa:", error);
        }
      });
  };

  editSiswa = (data, id) => {
    updateSiswa(data, id)
      .then((response) => {
        console.log("Siswa berhasil diperbarui:", response);
        Swal.fire({
          icon: "success",
          title: "Data Siswa berhasil diperbarui",
          width: 300,
          heightAuto: false,
          showConfirmButton: false,
          timer: 1000,
        });
        this.setState({ showModal: false });
        this.showAllSiswa();
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
          Swal.fire({
            icon: "error",
            title: "Maaf",
            text: "Anda Gagal Meperbarui data siswa",
            width: 300,
            heightAuto: false,
          });
          console.error("Gagal Meperbarui siswa:", error);
        }
      });
  };
  deleteSiswa = (id, name) => {
    if (
      window.confirm(`Apakah Anda yakin ingin menghapus siswa ${name} ini?`)
    ) {
      deleteSiswa(id)
        .then((response) => {
          console.log("Siswa berhasil dihapus:", response);
          Swal.fire({
            icon: "success",
            title: "Data Siswa berhasil dihapus",
            width: 300,
            heightAuto: false,
            showConfirmButton: false,
            timer: 1000,
          });
          this.showAllSiswa();
        })
        .catch((error) => {
          console.error("Gagal menghapus siswa:", error);
          Swal.fire({
            icon: "error",
            title: "Maaf",
            text: "Data anda Gagal Terhapus",
            width: 300,
            heightAuto: false,
          });
        });
    }
  };

  toggleDetailModal = (siswaId = null) => {
    if (siswaId) {
      console.log(siswaId);
      getSiswaById(siswaId)
        .then((response) => {
          this.setState({
            selectedSiswa: response.data,
            showDetailModal: !this.state.showDetailModal,
          });
        })
        .catch((error) => {
          console.error("Error fetching siswa:", error);
        });
    } else {
      this.setState({
        showDetailModal: !this.state.showDetailModal,
        selectedSiswa: null,
      });
    }
  };

  render() {
    return (
      <>
        <Navbar />
        <TableSiswa
          siswa={this.state.siswa}
          toogleModal={this.toogleModal}
          deleteSiswa={this.deleteSiswa}
          toggleDetailModal={this.toggleDetailModal}
        />
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
        {this.state.showDetailModal && (
          <DetailInfo
            toggleDetailModal={this.toggleDetailModal}
            siswa={this.state.selectedSiswa}
          />
        )}
      </>
    );
  }
}
