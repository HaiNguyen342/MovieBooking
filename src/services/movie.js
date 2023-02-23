import axios from "axios";
import { BASE_URL, TOKEN_CYBERSOFT } from "../constants";

export const fetchMovieListApi = () => {
  return axios({
    url: `${BASE_URL}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
    method: "GET",
    headers: {
      TokenCybersoft: TOKEN_CYBERSOFT,
    },
  });
};

export const fetchMovieDetailApi = (id) => {
  return axios({
    url: `${BASE_URL}/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
    method: "GET",
    headers: {
      TokenCybersoft: TOKEN_CYBERSOFT,
    },
  });
};
