import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import NavFooter from '../components/NavFooter';
import Header from '../components/Header';

export default function Wallets() {
  const [activeTab, setActiveTab] = useState('add');
  const [amount, setAmount] = useState('');

  const amountOptions = [500, 1000, 1500, 2000, 2500, 3000];

  return (
    <SafeAreaView style={styles.safeArea}>
         <Header/>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
 
        {/* Header Title */}
        <Text style={styles.headerTitle}>💰 My Wallet</Text>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'add' && styles.activeTab]}
            onPress={() => setActiveTab('add')}
          >
            <Text style={styles.tabText}>Add Point</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'withdraw' && styles.activeTab]}
            onPress={() => setActiveTab('withdraw')}
          >
            <Text style={styles.tabText}>Withdraw</Text>
          </TouchableOpacity>
        </View>

        {/* Input Section */}
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder={activeTab === 'add' ? 'Enter Point' : '₹ Withdraw Point'}
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />

          {/* Amount Buttons */}
          <View style={styles.buttonGrid}>
            {amountOptions.map((value) => (
              <TouchableOpacity
                key={value}
                style={styles.amountButton}
                onPress={() => setAmount(value.toString())}
              >
                <Text style={styles.amountText}>₹{value}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Notice Text */}
          {activeTab === 'add' ? (
            <Text style={styles.notice}>आपका पैसा 5 से 10 मिनट में ऐड हो जाएगा।</Text>
          ) : (
            <>
              <Text style={styles.withdrawNotice}>
                🪙 Withdraw Timing सुबह 10 बजे से रात 10 बजे तक है। 🌕
              </Text>
              <Text style={styles.winPoint}>Win Point : 0</Text>
            </>
          )}

          {/* Action Button */}
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>
              {activeTab === 'add' ? 'Add Points' : 'Withdrawal'}
            </Text>
          </TouchableOpacity>

          {/* Withdraw: Add Bank Button */}
          {activeTab === 'withdraw' && (
            <TouchableOpacity style={styles.bankButton}>
              <Text style={styles.bankButtonText}>Add Bank Account</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>

      {/* Navigation Footer */}
      <NavFooter />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#e0f0f5',
    borderRadius: 8,
    overflow: 'hidden',
  },
  tabButton: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  activeTab: {
    backgroundColor: '#dff0f5',
    borderBottomWidth: 2,
    borderBottomColor: '#007bff',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
  },
  formContainer: {
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 6,
    marginBottom: 15,
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  amountButton: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    width: '30%',
    alignItems: 'center',
  },
  amountText: {
    fontSize: 16,
  },
  notice: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
  },
  withdrawNotice: {
    backgroundColor: '#ffdddd',
    padding: 10,
    textAlign: 'center',
    borderRadius: 6,
    color: '#d9534f',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  winPoint: {
    backgroundColor: '#ffdddd',
    padding: 10,
    textAlign: 'center',
    borderRadius: 6,
    color: '#d9534f',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  actionButton: {
    backgroundColor: '#d78ce3',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bankButton: {
    backgroundColor: '#32CD32',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  bankButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
