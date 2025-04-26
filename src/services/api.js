// src/services/api.js

import axios from "axios";

const api = axios.create({
  baseURL: "https://your-api-url.com/api", // Replace later with actual backend
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
