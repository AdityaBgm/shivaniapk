import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';
import Header from '../components/Header';
import AllGames from '../screens/AllGames';
import Wallets from '../screens/Wallets';
import Help from '../screens/Help';
import BonusReport from '../screens/BonusReport';
import TermsAndCondition from '../screens/TermsAndCondition';
import ReferEarn from '../screens/ReferEarn';
import MyPlayHistory from '../screens/MyPlayHistory';
import AppDetails from '../screens/AppDetails';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login" 
      screenOptions={{
        headerShown: false
      }}
    >
    <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}  />
      <Stack.Screen name="About" component={AboutScreen}  options={{ headerShown: false }} />
      <Stack.Screen name="Contact" component={ContactScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AllGames" component={AllGames} options={{ headerShown: false }}/>
      <Stack.Screen name="Wallets" component={Wallets} options={{ headerShown: false }}  />
      <Stack.Screen name="Help" component={Help}  options={{ headerShown: false }} />
      <Stack.Screen name="BonusReport" component={BonusReport} options={{ headerShown: false }} />
      <Stack.Screen name="TermsAndCondition" component={TermsAndCondition} options={{ headerShown: false }} />
      <Stack.Screen name="ReferEarn" component={ReferEarn} options={{ headerShown: false }} />
      <Stack.Screen name="MyPlayHistory" component={MyPlayHistory} options={{ headerShown: false }} />
      <Stack.Screen name="AppDetails" component={AppDetails} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}