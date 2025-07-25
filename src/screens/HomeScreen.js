import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import HeadContainer from '../components/HeadContainer';
import GreetCard from '../components/GreetCard';
import ResultCard from '../components/ResultCard';
import SeeAllResults from '../components/SeeAllResults';
import LiveResultsList from '../components/LiveResultsList';
import NavFooter from '../components/NavFooter';
import Header from '../components/Header';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
           <Header/>
        <HeadContainer />
        <GreetCard />
        <ResultCard />
        <SeeAllResults />
        <LiveResultsList />
      </ScrollView>
           <NavFooter/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#8B1A1A',
  },
  scrollContent: {
    backgroundColor: '#F3F3F3',
    paddingBottom: 20,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  footerText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
