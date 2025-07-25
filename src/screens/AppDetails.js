import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import NavFooter from '../components/NavFooter';

export default function AppDetails() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
          <Text style={styles.title}>App Details</Text>
          
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>TM No:</Text>
            <Text style={styles.detailValue}>94365001265</Text>
          </View>
          
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>ARN:</Text>
            <Text style={styles.detailValue}>22926011003</Text>
          </View>
          
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Provisional:</Text>
            <Text style={styles.detailValue}>72666016382</Text>
          </View>
          
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>URN:</Text>
            <Text style={styles.detailValue}>9351865037</Text>
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
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#8B1A1A',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  detailValue: {
    fontSize: 16,
    color: '#555',
  },
});