import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import usePlaceBet from '../hooks/usePlaceBet'; // make sure path is correct

const TABS = ['Jodi', 'Manual', 'Harraf', 'Crossing', 'Copy Paste'];

const PlayingGame = () => {
  const route = useRoute();
  const { market } = route.params;

  const [selectedTab, setSelectedTab] = useState('Jodi');
  const [pointsRemaining, setPointsRemaining] = useState(689);
  const [pointsAdded, setPointsAdded] = useState(0);
  const [bets, setBets] = useState({});

  const { mutate: placeBet, isPending } = usePlaceBet();

  const handleInputChange = (key, value) => {
    const newBets = { ...bets, [key]: value };
    setBets(newBets);

    const total = Object.values(newBets).reduce((sum, val) => sum + (parseInt(val) || 0), 0);
    setPointsAdded(total);
    setPointsRemaining(689 - total);
  };

const handlePlaceBet = () => {
  const betArray = Object.entries(bets)
    .filter(([_, points]) => parseInt(points) > 0)
    .map(([betKey, points]) => ({
      betKey,
      points: parseInt(points),
      betType: selectedTab,
      jodiType: selectedTab,
      market: market.market,
    }));

  if (betArray.length === 0) {
    Alert.alert("No Bets", "Please enter some points to place a bet.");
    return;
  }

  // 👇 Add this log to inspect payload
  console.log("Placing Bet Payload:", betArray);

  placeBet(betArray, {
    onSuccess: () => {
      Alert.alert("Success", "Bet placed successfully!");
      setBets({});
      setPointsAdded(0);
      setPointsRemaining(689);
    },
    onError: (err) => {
      console.log("Bet placement error:", err); // 👈 Log error too
      Alert.alert("Error", "Failed to place bet111. Please try again.");
    },
  });
};


  const renderGrid = () => {
    const grid = [];
    for (let i = 0; i <= 99; i++) {
      const key = i < 10 ? `0${i}` : `${i}`;
      grid.push(
        <View key={key} style={styles.betBox}>
          <Text style={styles.betLabel}>{key}</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.betInput}
            value={bets[key] || ''}
            onChangeText={(value) => handleInputChange(key, value)}
            placeholder="---"
            placeholderTextColor="#999"
          />
        </View>
      );
    }
    return grid;
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>{market.market.toUpperCase()}</Text>
        <Text style={styles.timerText}>00:17:56</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        {TABS.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, selectedTab === tab && styles.tabActive]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={selectedTab === tab ? styles.tabTextActive : styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Points Info */}
      <View style={styles.pointsInfo}>
        <Text>Points Remaining: {pointsRemaining}</Text>
        <Text>Points Added: {pointsAdded}</Text>
      </View>

      {/* Bet Grid */}
      <ScrollView contentContainerStyle={styles.grid}>
        {renderGrid()}
      </ScrollView>

      {/* Place Bet Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.placeBetButton} onPress={handlePlaceBet} disabled={isPending}>
          <Text style={styles.placeBetText}>{isPending ? 'Placing Bet...' : 'Place Bet'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PlayingGame;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  timerText: {
    color: 'red',
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'space-between',
  },
  tab: {
    flex: 1,
    backgroundColor: '#F6C247',
    paddingVertical: 8,
    marginHorizontal: 3,
    borderRadius: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F6C247',
  },
  tabActive: {
    borderColor: '#000',
    backgroundColor: '#FFD700',
  },
  tabText: {
    color: '#000',
    fontWeight: '600',
  },
  tabTextActive: {
    color: '#000',
    fontWeight: 'bold',
  },
  pointsInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  betBox: {
    width: '18%',
    borderColor: 'red',
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#fff0f0',
  },
  betLabel: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  betInput: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    marginTop: 4,
    width: '100%',
    textAlign: 'center',
    height: 30,
    padding: 0,
    fontSize: 14,
    color: '#000',
  },
  footer: {
    padding: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  placeBetButton: {
    backgroundColor: 'linear-gradient(90deg, #F6C247, #FF5F6D)', // use a gradient lib if needed
    backgroundColor: '#FF5F6D',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
  },
  placeBetText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
         