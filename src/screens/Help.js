import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Linking
} from 'react-native';
import NavFooter from '../components/NavFooter';
import Header from '../components/Header';

export default function Help() {
  const handleContactSupport = () => {
    // Replace with actual support link
    Linking.openURL('https://example.com/support');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
       <Header/>
      <View style={styles.container}>
      
        <ScrollView contentContainerStyle={styles.scrollContainer}>
     
          {/* Header */}
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>💥 SHIVANI MATKA HELP & SUPPORT 💥</Text>
            <View style={styles.headerUnderline} />
          </View>

          <View style={styles.card}>
            <Text style={styles.subHeader}>🔥 Min Deposit: Rs. 100 | Min Withdraw: Rs. 400 | रेट 10 के 980 🔥</Text>
          </View>
          
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>👽 गेम कैसे खेलनी है जानिए 👽</Text>
            <View style={styles.divider} />
            
            <View style={styles.tipContainer}>
              <Text style={styles.tipIcon}>🔥</Text>
              <Text style={styles.paragraph}>
                सभी गेम मैं 1 से 100 Jodi मैं से कोई एक Jodi आता है अगर आपने वही लगाया हुआ है तो आपको 98 गुणा पैसे मिलेंगे
              </Text>
            </View>
            
            <View style={styles.tipContainer}>
              <Text style={styles.tipIcon}>🔥</Text>
              <Text style={styles.paragraph}>
                जैसे आपने कोई Jodi पर 10 रुपए लगाए हैं और जिस जोड़ी पर आपने पैसे लगाए हैं वही Result आता है तो आपको 10 रुपये का 980 रुपये मिलेगा
              </Text>
            </View>
            
            <View style={styles.tipContainer}>
              <Text style={styles.tipIcon}>🔥</Text>
              <Text style={styles.paragraph}>
                आप कितने भी नंबर लगा सकते हो बस आपका पास होना चाइए और पास होते ही पैसा आपके वॉलेट मैं आ जायेगा
              </Text>
            </View>
          </View>

          <TouchableOpacity 
            style={styles.supportButton}
            onPress={handleContactSupport}
          >
            <Text style={styles.supportButtonText}>चैट सपोर्ट से संपर्क करें</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Navigation Footer */}
        <NavFooter />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 80,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#d78ce3',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  headerUnderline: {
    height: 3,
    width: 100,
    backgroundColor: '#d78ce3',
    marginTop: 8,
    borderRadius: 3,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  subHeader: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#d78ce3',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d78ce3',
    textAlign: 'center',
    marginBottom: 15,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
  },
  tipContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  tipIcon: {
    fontSize: 20,
    marginRight: 10,
    color: '#d78ce3',
  },
  paragraph: {
    fontSize: 16,
    flex: 1,
    color: '#333',
    lineHeight: 22,
  },
  supportButton: {
    backgroundColor: '#d78ce3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  supportButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});