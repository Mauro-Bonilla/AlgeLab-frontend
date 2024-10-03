// src/utils.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000', // Update this to match your backend URL
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
