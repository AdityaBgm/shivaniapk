// screens/MyPlayHistory.js
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import NavFooter from '../components/NavFooter';

export default function MyPlayHistory() {
  const [selectedDate, setSelectedDate] = useState('2025-08-01');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Datewise Play History</Text>

        <Calendar
          current={selectedDate}
          onDayPress={(day) =>
            navigation.navigate('PlayHistoryDetail', {
              date: day.dateString,
            })
          }
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: '#8B0000' },
          }}
          theme={{
            selectedDayBackgroundColor: '#8B0000',
            todayTextColor: '#8B0000',
            arrowColor: '#8B0000',
            monthTextColor: '#8B0000',
          }}
        />
      </ScrollView>
      <NavFooter />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  scroll: { padding: 15, paddingBottom: 80 },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#333',
  },
});
