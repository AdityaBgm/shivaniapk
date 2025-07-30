// import React from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';

// const data = [
//   {
//     name: 'DELHI BAZAAR',
//     open: '7:00 AM',
//     close: '3:00 PM',
//     resultTime: '3:15 PM',
//     prevResult: '09',
//     todayResult: 'XX',
//     bgColor: '#FFF4B2',
//   },
//   {
//     name: 'SHRI GANESH',
//     open: '7:00 AM',
//     close: '4:35 PM',
//     resultTime: '4:40 PM',
//     prevResult: '62',
//     todayResult: 'XX',
//     bgColor: '#FFF4B2',
//   },
//   {
//     name: 'FARIDABAAD',
//     open: '7:00 AM',
//     close: '5:50 PM',
//     resultTime: '6:10 PM',
//     prevResult: '20',
//     todayResult: 'XX',
//     bgColor: '#FFF4B2',
//   },
//   {
//     name: 'GAZIABAAD',
//     open: '7:00 AM',
//     close: '9:30 PM',
//     resultTime: '9:45 PM',
//     prevResult: '64',
//     todayResult: 'XX',
//     bgColor: '#FFF4B2',
//   },
//   {
//     name: 'GALI',
//     open: '7:00 AM',
//     close: '11:30 PM',
//     resultTime: '11:45 PM',
//     prevResult: '37',
//     todayResult: 'XX',
//     bgColor: '#FFF4B2',
//   },
//   {
//     name: 'DISAWAR',
//     open: '11:00 AM',
//     close: '4:00 AM',
//     resultTime: '6:00 AM',
//     prevResult: '55',
//     todayResult: '18',
//     bgColor: '#F75D59',
//   },
// ];


// export default function LiveResultsList() {
//   return (
//     <View style={styles.wrapper}>
//       <Text style={styles.header}>Live Result of 2025-07-25</Text>
//       {data.map((item, index) => (
//         <View key={index} style={[styles.card, { backgroundColor: item.bgColor }]}>
//           <Text style={styles.title}>{item.name}</Text>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//             <View style={styles.row}>
//               <View style={styles.col}>
//                 <Text style={styles.label}>Open Time</Text>
//                 <Text style={styles.value}>{item.open}</Text>
//               </View>
//               <View style={styles.col}>
//                 <Text style={styles.label}>Close Time</Text>
//                 <Text style={styles.value}>{item.close}</Text>
//               </View>
//               <View style={styles.col}>
//                 <Text style={styles.label}>Result Time</Text>
//                 <Text style={styles.value}>{item.resultTime}</Text>
//               </View>
//               <View style={styles.col}>
//                 <Text style={styles.label}>Previous Result</Text>
//                 <Text style={styles.value}>{item.prevResult}</Text>
//               </View>
//               <View style={styles.col}>
//                 <Text style={styles.label}>Today Result</Text>
//                 <Text style={styles.value}>{item.todayResult}</Text>
//               </View>
//             </View>
//           </ScrollView>
//         </View>
//       ))}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   wrapper: {
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   header: {
//     backgroundColor: '#B8860B',
//     color: 'white',
//     textAlign: 'center',
//     paddingVertical: 8,
//     marginTop: 10,
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   card: {
//     borderRadius: 8,
//     paddingVertical: 10,
//     paddingHorizontal: 6,
//     marginVertical: 6,
//   },
//   title: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     color: '#4B0082',
//     marginBottom: 8,
//     textTransform: 'uppercase',
//   },
//   row: {
//     flexDirection: 'row',
//   },
//   col: {
//     alignItems: 'center',
//     marginRight: 20,
//     minWidth: 80, // ensures minimum space for label+value
//   },
//   label: {
//     fontSize: 10,
//     color: '#555',
//   },
//   value: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#000',
//   },
// });

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import moment from 'moment';
import useAllMarkets from '../hooks/useAllMarkets'; // Adjust path if needed

export default function LiveResultsList() {
  const { data: markets, isLoading, error } = useAllMarkets();

  if (isLoading) {
    return <ActivityIndicator size="large" color="#B8860B" style={{ marginTop: 20 }} />;
  }

  if (error) {
    return <Text style={styles.errorText}>Failed to load data</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      {markets?.map((item, index) => {
        const open = moment(item.open_time).format('h:mm A');
        const close = moment(item.close_time).format('h:mm A');
        const resultTime = moment(item.result_time).format('h:mm A');
        const prevResult = item.previous_result?.bet_key || '--';
        const todayResult = item.latest_result?.bet_key || 'XX';

        return (
          <View key={index} style={styles.card}>
            <Text style={styles.marketName}>{item.market}</Text>
            <View style={styles.headerRow}>
              <Text style={styles.headerText}>Open Time</Text>
              <Text style={styles.headerText}>Close Time</Text>
              <Text style={styles.headerText}>Result Time</Text>
              <Text style={styles.headerText}>Previous Result</Text>
              <Text style={styles.headerText}>Today Result</Text>
            </View>
            <View style={styles.dataRow}>
              <Text style={styles.dataText}>{open}</Text>
              <Text style={styles.dataText}>{close}</Text>
              <Text style={styles.dataText}>{resultTime}</Text>
              <Text style={styles.dataText}>{prevResult}</Text>
              <Text style={styles.dataText}>{todayResult}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#FFF9C4',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    elevation: 2,
  },
  marketName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A148C',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#555',
    width: '19%',
    textAlign: 'center',
  },
  dataText: {
    fontSize: 14,
    color: '#000',
    width: '19%',
    textAlign: 'center',
  },
  errorText: {
    textAlign: 'center',
    color: 'red',
    marginTop: 20,
  },
});
