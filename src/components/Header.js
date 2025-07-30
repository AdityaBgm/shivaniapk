import React, { useState, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  Animated, 
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import ReferandEarnModal from '../Modals/ReferandEarnModal';

const { width } = Dimensions.get('window');

const Header = ({ totalPoints = 0 }) => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(-width * 0.8)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;

  const menuItems = [
    { title: 'Bonus Report', screen: 'BonusReport', icon: 'star' },
    { title: 'Terms & Conditions', screen: 'TermsAndCondition', icon: 'file-text' },
    { title: 'Refer & Earn', screen: 'ReferEarn', icon: 'users' },
    { title: 'My Play History', screen: 'MyPlayHistory', icon: 'history' },
    { title: 'App Details', screen: 'AppDetails', icon: 'info-circle' },
  ];

  const [showReferModal, setShowReferModal] = useState(false);
  const referralCode = '9CD7A566'; 

  const openMenu = () => {
    setMenuVisible(true);
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(overlayOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeMenu = () => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: -width * 0.8,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(overlayOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setMenuVisible(false);
    });
  };

const handleMenuPress = (screen) => {
  closeMenu();
  if (screen === 'ReferEarn') {
    setShowReferModal(true);
    return;
  }
  setTimeout(() => {
    navigation.navigate(screen);
  }, 300);
};

const handleLogout = async () => {
  try {
    await AsyncStorage.removeItem('authToken');
    await AsyncStorage.removeItem('mobileNumber');
    // You can also clear everything if needed:
    // await AsyncStorage.clear();

    closeMenu(); // close side menu first
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    }, 300);
  } catch (error) {
    console.error("Logout error:", error);
    alert("Logout failed. Please try again.");
  }
};


  return (
    <>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <TouchableOpacity onPress={openMenu}>
            <Icon name="bars" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.pointsText}>Total Point: {totalPoints}</Text>

          <TouchableOpacity onPress={() => alert('Notifications coming soon!')}>
            <Icon name="bell" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <ReferandEarnModal
  visible={showReferModal}
  onClose={() => setShowReferModal(false)}
  referralCode={referralCode}
/>
      </SafeAreaView>

      {menuVisible && (
        <View style={styles.menuOverlay}>
          <TouchableWithoutFeedback onPress={closeMenu}>
            <Animated.View 
              style={[
                styles.overlay,
                { opacity: overlayOpacity }
              ]} 
            />
          </TouchableWithoutFeedback>

          <Animated.View
            style={[
              styles.slidingMenu,
              { transform: [{ translateX: slideAnim }] }
            ]}
          >
            {/* Profile Section */}
            <View style={styles.profileSection}>
              <TouchableOpacity 
                style={styles.closeButton} 
                onPress={closeMenu}
              >
                <Icon name="times" size={24} color="#fff" />
              </TouchableOpacity>
              
              <View style={styles.profileImageContainer}>
                <View style={styles.profileImagePlaceholder}>
                  <Icon name="user" size={30} color="#fff" />
                </View>
                <TouchableOpacity style={styles.editButton}>
                  <Text style={styles.editButtonText}>Edit Profile</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.userId}>ID : 8737029643</Text>
            </View>

            <View style={styles.middleSection}>
              <ScrollView 
                style={styles.menuItemsContainer}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
              >
                {/* Only show the specified menu items */}
                {menuItems.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.menuItem}
                    onPress={() => handleMenuPress(item.screen)}
                  >
                    <View style={styles.menuItemContent}>
                      <Icon name={item.icon} size={20} color="#fff" style={styles.menuIcon} />
                      <Text style={styles.menuTitle}>{item.title}</Text>
                      <Icon name="chevron-right" size={16} color="#fff" style={styles.chevronIcon} />
                    </View>
                  </TouchableOpacity>
                ))}

                {/* Logout option */}
             <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
  <View style={styles.menuItemContent}>
    <Icon name="sign-out" size={20} color="#fff" style={styles.menuIcon} />
    <Text style={styles.menuTitle}>Logout</Text>
    <Icon name="chevron-right" size={16} color="#fff" style={styles.chevronIcon} />
  </View>
</TouchableOpacity>

              </ScrollView>
            </View>

            {/* Social Media Links */}
            <View style={styles.socialContainer}>
              <TouchableOpacity style={styles.socialButton}>
                <Icon name="instagram" size={20} color="#E4405F" />
                <Text style={styles.socialText}>Instagram</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.socialButton}>
                <Icon name="facebook" size={20} color="#4267B2" />
                <Text style={styles.socialText}>Facebook</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.socialButton}>
                <Icon name="whatsapp" size={20} color="#25D366" />
                <Text style={styles.socialText}>WhatsApp</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      )}
    </>
  );
};

// ... (keep the same styles as before)
const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: '#8B1A1A',
    paddingTop: 35,
    zIndex: 1,
  },
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#8B1A1A',
  },
  pointsText: {
    color: '#fff',
    fontSize: 16,
  },
  menuOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  slidingMenu: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: width * 0.8,
    backgroundColor: '#f5f5f5',
    elevation: 16,
    flexDirection: 'column',
  },
  profileSection: {
    backgroundColor: '#8B1A1A',
    padding: 20,
    paddingTop: 50,
  },
  middleSection: {
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 1,
    padding: 5,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  userId: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  menuItemsContainer: {
    flex: 1,
    padding: 10,
  },
  menuItem: {
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#D2691E',
    elevation: 2,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  menuIcon: {
    marginRight: 15,
    width: 20,
  },
  menuTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuSubtitle: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.9,
    marginTop: 2,
  },
  chevronIcon: {
    opacity: 0.7,
  },
  socialContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialButton: {
    alignItems: 'center',
    padding: 10,
  },
  socialText: {
    fontSize: 10,
    color: '#333',
    marginTop: 5,
  },
});

export default Header;