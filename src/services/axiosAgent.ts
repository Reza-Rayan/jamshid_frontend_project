// apiAgent.ts

import axios, { AxiosInstance } from 'axios';
import BaseURL from '../utils/BaseURL';


const AxiosAgent: AxiosInstance = axios.create({
  baseURL:BaseURL,
  timeout: 5000, // Adjust as needed
});

// Interceptors for request and response (optional)
AxiosAgent.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  }
);

AxiosAgent.interceptors.response.use(
  (response) => {
    // You can modify response data here
    return response;
  },
  (error) => {
    // Handle response errors here
    return Promise.reject(error);
  }
);

export default AxiosAgent;
