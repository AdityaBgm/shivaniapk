import React from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import NavFooter from '../components/NavFooter';

export default function TermsAndCondition() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
          <Text style={styles.title}>💥 SHIVANI MATKA TERMS AND CONDITION 💥</Text>
          
          <View style={styles.termContainer}>
            <Text style={styles.termIcon}>🔥</Text>
            <Text style={styles.termText}>10000 इंटू की जोड़ी लगेगी मैक्सिमम</Text>
          </View>
          
          <View style={styles.termContainer}>
            <Text style={styles.termIcon}>🔥</Text>
            <Text style={styles.termText}>20000 इंटू का हरूफ़ लगेगा मैक्सिमम</Text>
          </View>
          
          <View style={styles.termContainer}>
            <Text style={styles.termIcon}>🔥</Text>
            <Text style={styles.termText}>2000 इंटू की क्रॉसिंग लगेगी मैक्सिमम</Text>
          </View>
          
          <View style={styles.termContainer}>
            <Text style={styles.termIcon}>🔥</Text>
            <Text style={styles.termText}>रिजल्ट एप्लिकेशन मैं अपडेट होते ही आपका पैसा आपके एप्लिकेशन के वॉलेट में आ जाएगा</Text>
          </View>
          
          <View style={styles.termContainer}>
            <Text style={styles.termIcon}>🔥</Text>
            <Text style={styles.termText}>कभी भी पैसा ऐड कर सकते हैं एप्लीकेशन मैं</Text>
          </View>
          
          <View style={styles.termContainer}>
            <Text style={styles.termIcon}>🔥</Text>
            <Text style={styles.termText}>पैसा निकालने का समय सुबह 10 बजे से रात के 10 बजे तक हैं</Text>
          </View>
          
          <View style={styles.termContainer}>
            <Text style={styles.termIcon}>🔥</Text>
            <Text style={styles.termText}>WITHDRAW REQUEST डालते ही 5 से 10 मिनट के अंदर पैसा आपके अकाउंट मैं आ जाएगा</Text>
          </View>
          
          <View style={styles.termContainer}>
            <Text style={styles.termIcon}>🔥</Text>
            <Text style={styles.termText}>अगर आपको किसी भी प्रकार की समस्या होती है तो आप चैट कर सकते है</Text>
          </View>
        </View>
      </ScrollView>
      <NavFooter />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  scroll: { 
    padding: 20, 
    paddingTop: 20, 
    paddingBottom: 80 
  },
  container: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8B1A1A',
    textAlign: 'center',
    marginBottom: 20,
  },
  termContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  termIcon: {
    fontSize: 20,
    marginRight: 10,
    color: '#FF5733',
  },
  termText: {
    fontSize: 16,
    flex: 1,
    color: '#333',
    lineHeight: 22,
  },
});