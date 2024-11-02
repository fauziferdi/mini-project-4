import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const allSiswa = async () => {
  const res = await axios.get(`${API_URL}/students`, {
    headers: {
      "Content-Type": "application/json",
      "api-key": "RJS1-202407",
    },
  });
  return res.data;
};
