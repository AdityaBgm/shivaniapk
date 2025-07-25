import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Linking, Clipboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ReferandEarnModal({ visible, onClose, referralCode }) {
  const appLink = `https://shivanimatka.com/${referralCode}`;
  const message = `Join Shivani Matka using my referral code: ${referralCode}\n${appLink}`;

  const copyToClipboard = () => {
    Clipboard.setString(message);
    alert('Referral message copied!');
  };

  const shareViaWhatsApp = () => {
    Linking.openURL(`whatsapp://send?text=${encodeURIComponent(message)}`);
  };

  const shareViaSMS = () => {
    Linking.openURL(`sms:?body=${encodeURIComponent(message)}`);
  };

  const shareViaFacebook = () => {
    Linking.openURL(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(appLink)}`);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Icon name="times" size={20} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.heading}>Welcome to The Shivani MATKA</Text>
          <Text style={styles.subText}>
            यदि आप किसी नए खिलाड़ी को नीचे दिए गए रेफरल कोड के माध्यम से साइन अप कराते हैं, तो आपको First Deposite Bonus और Signup Bonus मिलेगा।
          </Text>

          <View style={styles.logoContainer}>
            <Icon name="circle" size={100} color="#000" />
            <Text style={styles.logoText}>Shivani Matka</Text>
          </View>

          <View style={styles.referralBox}>
            <Text style={styles.referralLabel}>Share Application:</Text>
            <Text style={styles.referralLink}>{appLink}</Text>
            <Text style={styles.referralLabel}>My Referral Code:</Text>
            <Text style={styles.referralCode}>{referralCode}</Text>
          </View>

          <TouchableOpacity style={styles.copyBtn} onPress={copyToClipboard}>
            <Text style={styles.copyText}>🔥 COPY REFERRAL MESSAGE 🔥</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.shareBtn} onPress={shareViaWhatsApp}>
            <Text style={styles.shareText}>Share on WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareBtn} onPress={shareViaSMS}>
            <Text style={styles.shareText}>Share via SMS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareBtn} onPress={shareViaFacebook}>
            <Text style={styles.shareText}>Share on Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center' },
  container: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  closeButton: { position: 'absolute', top: 10, right: 10, backgroundColor: '#000', padding: 6, borderRadius: 20 },
  heading: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },
  subText: { fontSize: 14, color: 'red', textAlign: 'center', marginBottom: 10 },
  logoContainer: { alignItems: 'center', marginVertical: 10 },
  logoText: { fontWeight: 'bold', fontSize: 18, marginTop: 5 },
  referralBox: { backgroundColor: '#1b3d1b', padding: 15, borderRadius: 10, width: '100%', marginBottom: 10 },
  referralLabel: { color: '#fff', fontSize: 12 },
  referralLink: { color: '#7fffd4', fontSize: 14, marginVertical: 5 },
  referralCode: { color: '#7fffd4', fontWeight: 'bold' },
  copyBtn: { backgroundColor: '#ff7f50', padding: 12, borderRadius: 8, marginBottom: 10 },
  copyText: { color: '#fff', fontWeight: 'bold' },
  shareBtn: { backgroundColor: '#9b59b6', padding: 12, borderRadius: 8, width: '100%', marginBottom: 8 },
  shareText: { color: '#fff', textAlign: 'center', fontWeight: '600' },
});
