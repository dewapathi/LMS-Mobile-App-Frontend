import axios from "axios";
import Constants from "expo-constants";

const axiosClient = axios.create({
  baseURL: Constants.expoConfig?.extra?.djangoApiBaseUrl,
  // baseURL: Constants.expoConfig?.extra?.djangoApiBaseUrl,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": Constants.expoConfig?.extra?.apiKey || "123",
  },
});

// Request interceptor
axiosClient.interceptors.request.use((config) => {
  return config;
});

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.log("--------------------------", error);

    const errorMessage =
      error.response?.data?.message ||
      error.response?.data?.detail ||
      error.message ||
      "Request failed";

    // Convert Django error format to more client-friendly format
    if (error.response?.data) {
      return Promise.reject({
        message: errorMessage,
        details: error.response.data,
        status: error.response.status,
      });
    }

    return Promise.reject({ message: errorMessage });
  }
);

export default axiosClient;
