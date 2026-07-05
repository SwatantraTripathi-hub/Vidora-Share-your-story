import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api", // Vite proxy ke through backend tak jaayega
  withCredentials: true, // agar cookies/JWT refresh token use hua too
});

export default axiosInstance;