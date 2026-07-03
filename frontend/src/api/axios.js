import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const base = API_URL ? `${API_URL.replace(/\/$/, "")}/api` : "/api";

const api = axios.create({ baseURL: base });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("aerex_admin_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
