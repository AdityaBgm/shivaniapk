// components/ResultCard.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ResultCard({ title = "DISAWAR", result = "18" }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Result</Text>
      <View style={styles.resultBox}>
        <Image
          source={require('../assets/trishul.png')}
          style={styles.icon}
        />
        <View style={styles.textBox}>
          <Text style={styles.gameName}>{title}</Text>
          <Text style={styles.result}>{result}</Text>
        </View>
        <Image
          source={require('../assets/trishul.png')}
          style={styles.icon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#8B1A1A',
    margin: 15,
    padding: 10,
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  resultBox: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFD700',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  textBox: {
    alignItems: 'center',
    flex: 1,
  },
  gameName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#8B1A1A',
  },
  result: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
});
