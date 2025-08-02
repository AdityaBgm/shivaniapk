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
import usePlaceBet from '../hooks/usePlaceBet'; // adjust path if needed

const TABS = ['Jodi', 'Manual', 'Harraf', 'Crossing', 'Copy Paste'];

const ManualScreen = () => {
  const route = useRoute();
  const { market } = route.params;

  const [selectedTab, setSelectedTab] = useState('Manual');
  const [pointsRemaining, setPointsRemaining] = useState(644);
  const [pointsAdded, setPointsAdded] = useState(0);
  const [bets, setBets] = useState({});

  const { mutate: placeBet, isPending } = usePlaceBet();

  const handleInputChange = (key, value) => {
    const newBets = { ...bets, [key]: value };
    setBets(newBets);

    const total = Object.values(newBets).reduce((sum, val) => sum + (parseInt(val) || 0), 0);
    setPointsAdded(total);
    setPointsRemaining(644 - total);
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

    console.log("Placing Bet Payload:", betArray);

    placeBet(betArray, {
      onSuccess: () => {
        Alert.alert("Success", "Bet placed successfully!");
        setBets({});
        setPointsAdded(0);
        setPointsRemaining(644);
      },
      onError: (err) => {
        console.log("Bet placement error:", err);
        Alert.alert("Error", "Failed to place bet. Please try again.");
      },
    });
  };

  const renderRows = () => {
    const rows = [];

    for (let i = 0; i < 10; i++) {
      rows.push(
        <View key={i} style={styles.row}>
          {[0, 1, 2, 3, 4].map((j) => {
            const num = i * 5 + j;
            const jodi = num < 10 ? `0${num}` : `${num}`;
            return (
              <View key={jodi} style={styles.cell}>
                <Text style={styles.cellLabel}>{jodi}</Text>
                <TextInput
                  placeholder="--"
                  keyboardType="numeric"
                  placeholderTextColor="#aaa"
                  style={styles.cellInput}
                  value={bets[jodi] || ''}
                  onChangeText={(value) => handleInputChange(jodi, value)}
                />
                <Text style={styles.cellTotal}>
                  {parseInt(bets[jodi]) > 0 ? parseInt(bets[jodi]) : 0}
                </Text>
              </View>
            );
          })}
        </View>
      );
    }

    return rows;
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerLeft}>{market.market.toUpperCase()}</Text>
        <Text style={styles.headerRight}>गेम का लास्ट टाइम <Text style={{ color: 'red' }}>03:15:55</Text></Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabRow}>
        {TABS.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, selectedTab === tab && styles.tabActive]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={[styles.tabText, selectedTab === tab && styles.tabTextActive]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Points Info */}
      <View style={styles.pointsInfo}>
        <Text>Points Remaining: {pointsRemaining}</Text>
        <Text>Points Added: {pointsAdded}</Text>
      </View>

      {/* Table Header */}
      <View style={styles.tableHeader}>
        <Text style={styles.headerCell}>Jodi</Text>
        <Text style={styles.headerCell}>Points</Text>
        <Text style={styles.headerCell}>Total</Text>
      </View>

      {/* Bet Grid */}
      <ScrollView style={{ flex: 1 }}>{renderRows()}</ScrollView>

      {/* Total Points */}
      <Text style={styles.totalPoints}>Total Points : {pointsAdded}</Text>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.placeBetButton} onPress={handlePlaceBet} disabled={isPending}>
          <Text style={styles.placeBetText}>{isPending ? 'Placing Bet...' : 'Place Bet'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ManualScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeft: { fontWeight: 'bold', fontSize: 16 },
  headerRight: { fontSize: 12 },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  tab: {
    backgroundColor: '#F6C247',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#F6C247',
  },
  tabActive: {
    borderColor: '#000',
    backgroundColor: '#FFD700',
  },
  tabText: { fontWeight: '600' },
  tabTextActive: { fontWeight: 'bold' },
  pointsInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 6,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#550000',
    padding: 10,
  },
  headerCell: {
    flex: 1,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 5,
  },
  cell: {
    flex: 1,
    margin: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 6,
    backgroundColor: '#ffeaea',
    alignItems: 'center',
  },
  cellLabel: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  cellInput: {
    width: '100%',
    height: 30,
    borderColor: '#aaa',
    borderTopWidth: 1,
    marginTop: 4,
    textAlign: 'center',
    fontSize: 13,
    color: '#000',
    padding: 0,
  },
  cellTotal: {
    fontSize: 12,
    marginTop: 4,
    color: '#333',
  },
  totalPoints: {
    textAlign: 'right',
    paddingHorizontal: 15,
    fontWeight: '600',
    marginTop: 6,
  },
  footer: {
    padding: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  placeBetButton: {
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


