// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import NavFooter from '../components/NavFooter';
// import Header from '../components/Header';

// const games = [
//   'DELHI BAZAAR',
//   'SHRI GANESH',
//   'FARIDABAAD',
//   'GAZIABAAD',
//   'GALI',
//   'DISAWAR',
// ];

// export default function AllGames() {
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <Header/>
//       <ScrollView contentContainerStyle={styles.scroll}>
//         {/* Header */}
      
//         <View style={styles.headerRow}>
//           <Text style={styles.headerText}>MARKET NAME</Text>
//           <Text style={styles.headerText}>ACTION</Text>
//         </View>

//         {/* Game List */}
//         {games.map((name, idx) => (
//           <View key={idx} style={styles.gameRow}>
//             <Text style={styles.marketName}>{name}</Text>
//             <TouchableOpacity style={styles.playButton}>
//               <Text style={styles.buttonText}>Play Game</Text>
//             </TouchableOpacity>
//           </View>
//         ))}
//       </ScrollView>

//       <NavFooter />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   scroll: {
//     paddingBottom: 80, // Space for footer
//     paddingHorizontal: 15,
//   },
//   headerRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     borderWidth: 1,
//     borderStyle: 'dotted',
//     borderColor: '#333',
//     padding: 10,
//     marginVertical: 10,
//     backgroundColor: '#f8f8f8',
//     borderRadius: 6,
//   },
//   headerText: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     color: '#333',
//   },
//   gameRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#EC9B11',
//     alignItems: 'center',
//     marginVertical: 6,
//     padding: 15,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowOffset: { width: 2, height: 2 },
//     elevation: 3,
//   },
//   marketName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   playButton: {
//     backgroundColor: 'linear-gradient(to bottom, #6A1B9A, #FFD700)', // gradient fallback
//     backgroundColor: '#6A1B9A', // fallback solid
//     paddingVertical: 8,
//     paddingHorizontal: 18,
//     borderRadius: 25,
//     shadowColor: '#000',
//     shadowOffset: { width: 2, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 3,
//     elevation: 4,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: '600',
//   },
// });



import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import useAllMarkets from '../hooks/useAllMarkets';
import NavFooter from '../components/NavFooter';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

export default function AllGames() {
  const { data: markets = [], isLoading, error } = useAllMarkets();
    const navigation = useNavigation();

  if (isLoading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Header />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#EC9B11" />
        </View>
        <NavFooter />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Header />
        <View style={styles.loadingContainer}>
          <Text style={{ color: 'red' }}>Failed to load markets.</Text>
        </View>
        <NavFooter />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>MARKET NAME</Text>
          <Text style={styles.headerText}>ACTION</Text>
        </View>

        {markets.map((market, idx) => (
          <View key={market._id || idx} style={styles.gameRow}>
            <Text style={styles.marketName}>{market.market}</Text>
             <TouchableOpacity
        style={styles.playButton}
        onPress={() => navigation.navigate('PlayingGame', { market })}
      >
        <Text style={styles.buttonText}>Play Game</Text>
      </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <NavFooter />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    paddingBottom: 80,
    paddingHorizontal: 15,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: '#333',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 6,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  gameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EC9B11',
    alignItems: 'center',
    marginVertical: 6,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 2, height: 2 },
    elevation: 3,
  },
  marketName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  playButton: {
    backgroundColor: '#6A1B9A',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
