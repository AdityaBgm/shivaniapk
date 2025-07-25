// components/SeeAllResults.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function SeeAllResults() {
  return (
    <View style={styles.noticeBox}>
      <Text style={styles.noticeText}>
        🔥 सबसे पहले रिजल्ट देखने के लिए क्लिक करें 🔥
      </Text>
      <TouchableOpacity
        style={styles.visitBtn}
        onPress={() => Linking.openURL('https://shivanimatka.com')}
      >
        <Text style={styles.visitBtnText}>Click here to visit Websites</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  noticeBox: {
    backgroundColor: '#FFF1CB',
    marginHorizontal: 20,
    marginTop: 10,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 4,
  },
  noticeText: {
    fontSize: 16,
    color: '#D92A2A',
    marginBottom: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  visitBtn: {
    backgroundColor: '#8B1A1A',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  visitBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
