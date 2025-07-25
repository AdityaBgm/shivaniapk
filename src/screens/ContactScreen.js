import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function ContactScreen() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text>Contact Us at: example@email.com</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#8B1A1A',
  },
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#F3F3F3',
  }
});