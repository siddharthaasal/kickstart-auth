// src/api.ts
// import axios, { AxiosInstance } from "axios";

// const api: AxiosInstance = axios.create({
//   baseURL: "http://localhost:4000", // Adjust this baseURL to your server's address
//   withCredentials: true, // Include credentials (cookies)
// });

// export default api;


import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
});

export default api;
