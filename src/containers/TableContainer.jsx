import React, { Component } from "react";
import { allSiswa } from "../utils/api";
import TableSiswa from "../components/TableSiswa";
import Navbar from "../components/Navbar";
import ModalForm from "../components/ModalForm";

export default class TableContainer extends Component {
  state = {
    siswa: [],
    isEdit: true,
    showModal: true,
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

  render() {
    return (
      <>
        <Navbar />
        <TableSiswa siswa={this.state.siswa} />
        {this.state.showModal && <ModalForm isEdit={this.state.isEdit} />}
      </>
    );
  }
}
