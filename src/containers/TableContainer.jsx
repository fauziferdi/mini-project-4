import React, { Component } from "react";
import { allSiswa, addSiswa, updateSiswa } from "../utils/api";
import TableSiswa from "../components/TableSiswa";
import Navbar from "../components/Navbar";
import ModalForm from "../components/ModalForm";

export default class TableContainer extends Component {
  state = {
    siswa: [],
    isEdit: true,
    showModal: false,
  };

  componentDidMount() {
    allSiswa()
      .then((response) => {
        this.setState({ siswa: response.data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  toogleModal = (isEdit = false) => {
    this.setState({
      isEdit,
      showModal: !this.state.showModal,
    });
  };

  addSiswa = (data) => {
    addSiswa(data)
      .then((response) => {
        console.log("Siswa berhasil ditambahkan:", response);
      })
      .catch((error) => {
        console.error("Gagal menambahkan siswa:", error);
      });
  };

  editSiswa = (data, id) => {
    updateSiswa(data, id)
      .then((response) => {
        console.log("Siswa berhasil diperbarui:", response);
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
          />
        )}
      </>
    );
  }
}
