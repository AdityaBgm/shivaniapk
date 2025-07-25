import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import NavFooter from '../components/NavFooter';

export default function BonusReport() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.text}>Bonus Report Screen</Text>
      </ScrollView>
      <NavFooter />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  scroll: { padding: 20, paddingTop: 100, paddingBottom: 80 },
  text: { fontSize: 18, textAlign: 'center' },
});
