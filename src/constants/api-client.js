import axios from "axios";
import { io } from "socket.io-client";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const BASE_URL = {
  url: "https://user2.shivanimatka.com"
};

// Initialize socket
const socket = io(BASE_URL.url, {
  withCredentials: true,
  transports: ["websocket", "polling"],
});

socket.on("connect", () => {
  console.log('Socket connected: ', socket.id);
});

socket.on("connect_error", (error) => {
  console.error("Socket connection error: ", error);
});

// Axios clients
export const apiClientNode = axios.create({
  baseURL: "https://user2.shivanimatka.com/club/"
});

export const apiClient = axios.create({
  baseURL: "https://user2.shivanimatka.com/club/",
});

export const adminApiClient = axios.create({
  baseURL: "https://user2.shivanimatka.com/dashboard"
});

// Auth header interceptor
const setAuthHeader = async (config) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["User-Type"] = "Player";
      
      // FormData handling works the same in React Native
      if (config.data instanceof FormData) {
        config.headers["Content-Type"] = "multipart/form-data";
      } else {
        config.headers["Content-Type"] = "application/json";
      }
    }
    return config;
  } catch (error) {
    console.error("Error setting auth header:", error);
    return config;
  }
};

// Error handling (modified for React Native)
const handle401Error = async (error) => {
  if (error.response && error.response.status === 401) {
    try {
      await AsyncStorage.multiRemove(["mobileNumber", "authToken"]);
      
      // Use your navigation method instead of window.location
      // Example: navigation.navigate('Login');
      Alert.alert("Session Expired", "Please login again");
    } catch (storageError) {
      console.error("Error clearing storage:", storageError);
    }
  }
  return Promise.reject(error);
};

// Request cancellation
const requestMap = new Map();

export const setupAxiosInterceptors = () => {
  apiClient.interceptors.request.use((config) => {
    const requestKey = `${config.method}:${config.url}`;
    if (requestMap.has(requestKey)) {
      requestMap.get(requestKey).abort();
    }
    const controller = new AbortController();
    config.signal = controller.signal;
    requestMap.set(requestKey, controller);
    return config;
  });

  apiClient.interceptors.response.use(
    (response) => {
      const requestKey = `${response.config.method}:${response.config.url}`;
      requestMap.delete(requestKey);
      return response;
    },
    (error) => {
      if (axios.isCancel(error)) {
        console.log("Canceled API:", error?.config?.url);
      } else {  
        const requestKey = `${error.config.method}:${error.config.url}`;
        requestMap.delete(requestKey);
      }
      return Promise.reject(error);
    }
  );
  console.log("Axios interceptors setup complete");
};

// Add interceptors
apiClient.interceptors.request.use(setAuthHeader);
adminApiClient.interceptors.request.use(setAuthHeader);
apiClientNode.interceptors.request.use(setAuthHeader);

apiClient.interceptors.response.use((response) => response, handle401Error);
adminApiClient.interceptors.response.use((response) => response, handle401Error);
apiClientNode.interceptors.response.use((response) => response, handle401Error);

// Remove auth token
export const removeAuthToken = async () => {
  try {
    await AsyncStorage.removeItem("authToken");
  } catch (error) {
    console.error("Error removing auth token:", error);
  }
};

export { socket };
export default apiClient;