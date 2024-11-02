// import React, { Component } from "react";
// import { allSiswa, addSiswa, updateSiswa } from "../utils/api";
// import TableSiswa from "../components/TableSiswa";
// import Navbar from "../components/Navbar";
// import ModalForm from "../components/ModalForm";

// const newStudent = {
//   name: "bahlilsadsda22222s",
//   class: "XI MIPA 3",
//   year: "2014",
//   nim: "9999929339929",
//   guardian_name: "Siti",
//   birthDate: "2000-12-20",
//   address: "Kebon jeruk Jakarta barat",
//   gender: "male",
// };

// const edtStudent = {
//   name: "MUKAISKULIN",
//   class: "XI MIPA 3",
//   year: "2014",
//   nim: "8888888888",
//   guardian_name: "Siti",
//   birthDate: "2000-12-20",
//   address: "Kebon jeruk Jakarta barat",
//   gender: "male",
// };

// export default class TableContainer extends Component {
//   state = {
//     siswa: [],
//     isEdit: true,
//     showModal: false,
//     siswaId: 1,
//   };

//   componentDidMount() {
//     allSiswa()
//       .then((response) => {
//         this.setState({ siswa: response.data });
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }

//   toogleModal = (isEdit = false) => {
//     this.setState({
//       isEdit,
//       showModal: !this.state.showModal,
//     });
//   };

//   addSiswa = () => {
//     addSiswa(newStudent)
//       .then((response) => {
//         console.log("Siswa berhasil ditambahkan:", response);
//         // this.setState({ siswaId: response.data.id });
//         // console.log(this.state.siswaId);
//         this.setState({ siswaId: response.data.id }, () => {
//           // Callback function, dijalankan setelah state diperbarui
//           console.log(this.state.siswaId); // Ini akan menampilkan ID yang benar
//         });
//       })
//       .catch((error) => {
//         console.error("Gagal menambahkan siswa:", error);
//       });
//   };

//   editSiswa = () => {
//     console.log(this.state.siswaId);
//     console.log(edtStudent);
//     updateSiswa(this.state.siswaId, edtStudent)
//       .then((response) => {
//         console.log("Siswa berhasil diperbarui:", response);
//       })
//       .catch((error) => {
//         console.error("Gagal memperbarui siswa:", error);
//       });
//   };

//   render() {
//     return (
//       <>
//         <Navbar addSiswa={this.addSiswa} editSiswa={this.editSiswa} />
//         <TableSiswa siswa={this.state.siswa} toogleModal={this.toogleModal} />
//         {this.state.showModal && (
//           <ModalForm
//             isEdit={this.state.isEdit}
//             toogleModal={this.toogleModal}
//           />
//         )}
//       </>
//     );
//   }
// }
