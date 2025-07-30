import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLoginUser, useVerifyOtp } from '../hooks/useAuth';

const LoginScreen = ({ navigation }) => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpField, setShowOtpField] = useState(false);
  
  // Login mutation with proper error handling
  const loginMutation = useLoginUser();
  const verifyOtpMutation = useVerifyOtp();

  const handleLogin = () => {
    loginMutation.mutate({ 
      mobile,
      agent_name: 'shivaniMatka',
      agent_url: 'https://shivanimatka.com',
      referred_by: 'referral_code'
    }, {
      onSuccess: () => {
        setShowOtpField(true);
      }
      // onError is already handled in the useLoginUser hook
    });
  };

const handleVerify = () => {
  const payload = {
    mobile,
    otp: Number(otp),
    agent_name: 'shivaniMatka',
  };

  console.log('Verifying OTP with:', payload);

verifyOtpMutation.mutate(payload, {
  onSuccess: async (data) => {
    try {
      await AsyncStorage.setItem('authToken', data.token);
      await AsyncStorage.setItem('mobileNumber', mobile);
      navigation.navigate('Home');
    } catch (error) {
      console.error("Error saving token to storage:", error);
    }
  }
});
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Shivani Matka</Text>
      
      {!showOtpField ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter mobile number"
            value={mobile}
            onChangeText={setMobile}
            keyboardType="phone-pad"
            maxLength={10}
          />
          <Button
            title={loginMutation.isLoading ? "Sending OTP..." : "Send OTP"}
            onPress={handleLogin}
            disabled={loginMutation.isLoading || !mobile}
          />
        </>
      ) : (
        <>
          <Text style={styles.otpText}>OTP sent to {mobile}</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            value={otp}
            onChangeText={setOtp}
            keyboardType="number-pad"  // Fixed typo: 'number-pad' instead of 'number-pad'
            maxLength={6}
          />
          <Button
            title={verifyOtpMutation.isLoading ? "Verifying..." : "Verify OTP"}
            onPress={handleVerify}
            disabled={verifyOtpMutation.isLoading || !otp}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 8,
    fontSize: 16,
  },
  otpText: {
    marginBottom: 10,
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
  },
});

export default LoginScreen;