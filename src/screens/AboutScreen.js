import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text>About Us Page</Text>
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