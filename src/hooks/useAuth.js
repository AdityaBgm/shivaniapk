// src/hooks/useAuth.js
import { useMutation } from "@tanstack/react-query";
import apiClient from "../constants/api-client";
import { Alert } from "react-native";

// Login hook
const postLogin = (data) => 
  apiClient.post("/login", data).then((res) => res.data);

export const useLoginUser = () => {
  return useMutation({
    mutationKey: ["loginUser"],
    mutationFn: postLogin,
    onError: (error) => {
      console.error("Login request failed:", error);
      let errorMessage = "Login failed. Please try again.";
      
      if (error.response) {
        errorMessage = error.response.data.message || errorMessage;
      }
      
      Alert.alert("Login Error", errorMessage);
    },
  });
};

// OTP Verification hook
const postVerifyOtp = (data) =>
  apiClient.post("/verify-otp", data).then((res) => res.data);

// In useAuth.js
export const useVerifyOtp = () => {
  return useMutation({
    mutationKey: ["verifyOtp"],
    mutationFn: postVerifyOtp,
    onError: (error) => {
      console.error("OTP verification failed:", error);
      let errorMessage = "OTP verification failed. Please try again.";
      
      if (error.response) {
        errorMessage = error.response.data.message || errorMessage;
      }
      
      Alert.alert("Verification Error", errorMessage);
    },
    // Note: Navigation is now handled in the component
  });
};