import axios from "axios";

const baseURL = (
  import.meta.env.VITE_API_URL || "http://localhost:4000/api/v1"
).replace(/\/+$/, "");

const api = axios.create({
  baseURL,
  withCredentials: true,
});

export default api;
