// src/utils.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Use environment variable for backend URL
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Optional: Handle 401 errors globally
    if (error.response && error.response.status === 401) {
      // Implement logout or redirect to login page if needed
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
