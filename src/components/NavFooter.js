import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; // ✅ Navigation hook

export default function NavFooter() {
  const navigation = useNavigation(); // ✅ Use navigation

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={22} color="white" />
          <Text style={styles.label}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('AllGames')}>
          <Icon name="game-controller" size={22} color="white" />
          <Text style={styles.label}>Games</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Wallets')}>
          <Icon name="wallet" size={22} color="white" />
          <Text style={styles.label}>Wallet</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Help')}>
          <Icon name="help-circle" size={22} color="white" />
          <Text style={styles.label}>Help</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#6A1B1A',
    paddingBottom: Platform.OS === 'android' ? 8 : 0,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#6A1B1A',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  tab: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: 'white',
    marginTop: 2,
  },
});
