import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // or use your existing icons

export default function HeadContainer() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Icon name="chat" size={20} color="#0088cc" />
        <Text style={styles.text}>Deposit Chat</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.withdraw]}>
        <Icon name="chat-bubble-outline" size={20} color="#FFA500" />
        <Text style={styles.text}>Withdraw Chat</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFD700',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 2,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderColor: '#0088cc',
    borderWidth: 2,
  },
  withdraw: {
    borderColor: '#FFA500',
  },
  text: {
    marginLeft: 6,
    fontWeight: '600',
    fontSize: 14,
    color: '#000',
  },
});
