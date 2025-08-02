// screens/PlayHistoryDetail.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import Header from '../components/Header';
import NavFooter from '../components/NavFooter';
import useMyPlayHistory from '../hooks/useMyPlayHistory';

export default function PlayHistoryDetail() {
  const route = useRoute();
  const { date } = route.params;

  const { myPlayHistory, isLoading, error } = useMyPlayHistory({ date });

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>My Play History</Text>

        {isLoading ? (
          <Text style={styles.status}>Loading...</Text>
        ) : error ? (
          <Text style={styles.status}>Something went wrong.</Text>
        ) : myPlayHistory.length === 0 ? (
          <Text style={styles.status}>No data found for this date.</Text>
        ) : (
          <View style={styles.table}>
            <View style={[styles.row, styles.headerRow]}>
              <Text style={styles.cell}>S. No.</Text>
              <Text style={styles.cell}>Date</Text>
              <Text style={styles.cell}>Name</Text>
              <Text style={styles.cell}>Type</Text>
              <Text style={styles.cell}>Number</Text>
              <Text style={styles.cell}>Points</Text>
              <Text style={styles.cell}>Win</Text>
              <Text style={styles.cell}>Result</Text>
            </View>

            {myPlayHistory.map((item, index) => (
              <View key={index} style={styles.row}>
                <Text style={styles.cell}>{index + 1}</Text>
                <Text style={styles.cell}>
                  {new Date(item.created_at).toLocaleDateString('en-GB')}
                  {'\n'}
                  {new Date(item.created_at).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </Text>
                <Text style={styles.cell}>{item.market}</Text>
                <Text style={styles.cell}>{item.betType}</Text>
                <Text style={styles.cell}>{item.betKey}</Text>
                <Text style={styles.cell}>{item.betAmount}</Text>
                <Text style={styles.cell}>
                  {item.winAmount > 0 ? `₹${item.winAmount}` : '-'}
                </Text>
                <Text
                  style={[
                    styles.cell,
                    item.declare === 'undeclared'
                      ? styles.undeclared
                      : styles.declared,
                  ]}
                >
                  {item.declare}
                </Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
      <NavFooter />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  scroll: { padding: 10, paddingBottom: 80 },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8B0000',
    textAlign: 'center',
    marginBottom: 20,
  },
  status: {
    textAlign: 'center',
    color: '#666',
    marginTop: 20,
    fontSize: 16,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  headerRow: {
    backgroundColor: '#8B0000',
  },
  cell: {
    flex: 1,
    padding: 6,
    fontSize: 12,
    textAlign: 'center',
    color: '#222',
  },
  undeclared: {
    color: 'green',
    fontWeight: 'bold',
  },
  declared: {
    color: 'black',
    fontWeight: 'bold',
  },
});
