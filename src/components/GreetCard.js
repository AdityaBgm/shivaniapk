import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const GreetCard = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
      setCurrentDate(now.toLocaleDateString());
    };

    updateTime(); // initial
    const intervalId = setInterval(updateTime, 1000); // update every second
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.card}>
      <Text style={styles.greetText}>🔥 भरोसे का एक ही नाम 🔥</Text>
      <Text style={styles.appName}>🙏 शिवानी मटका 🙏</Text>
      <View style={styles.timeRow}>
        <Icon name="clock-time-four-outline" size={18} color="#333" />
        <Text style={styles.timeText}> {currentTime} </Text>
        <Icon name="calendar" size={18} color="#333" />
        <Text style={styles.timeText}> {currentDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#DFF6FF',
    marginHorizontal: 10,
    marginVertical: 8,
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
  },
  greetText: {
    color: '#C0392B',
    fontSize: 16,
    fontWeight: 'bold',
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
    color: '#5C2E91',
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  timeText: {
    fontSize: 14,
    color: '#333',
  },
});

export default GreetCard;
