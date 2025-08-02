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
import PlayingGame from '../screens/PlayingGame';
import PlayHistoryDetail from '../screens/PlayHistoryDetail';

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
      <Stack.Screen name="PlayingGame" component={PlayingGame} options={{ headerShown: false }} />
      <Stack.Screen name="PlayHistoryDetail" component={PlayHistoryDetail} />
    </Stack.Navigator>
  );
}




// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from '../screens/HomeScreen';
// import AboutScreen from '../screens/AboutScreen';
// import ContactScreen from '../screens/ContactScreen';
// import Header from '../components/Header';
// import AllGames from '../screens/AllGames';
// import Wallets from '../screens/Wallets';
// import Help from '../screens/Help';
// import BonusReport from '../screens/BonusReport';
// import TermsAndCondition from '../screens/TermsAndCondition';
// import ReferEarn from '../screens/ReferEarn';
// import MyPlayHistory from '../screens/MyPlayHistory';
// import AppDetails from '../screens/AppDetails';
// import LoginScreen from '../screens/LoginScreen';
// // Removed LoginScreen

// const Stack = createNativeStackNavigator();

// export default function AppNavigator() {
//   return (
//     <Stack.Navigator
//       initialRouteName="Home"
//       screenOptions={{
//         headerShown: false
//       }}
//     >
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="About" component={AboutScreen} />
//       <Stack.Screen name="Contact" component={ContactScreen} />
//       <Stack.Screen name="AllGames" component={AllGames} />
//       <Stack.Screen name="Wallets" component={Wallets} />
//       <Stack.Screen name="Help" component={Help} />
//       <Stack.Screen name="BonusReport" component={BonusReport} />
//       <Stack.Screen name="TermsAndCondition" component={TermsAndCondition} />
//       <Stack.Screen name="ReferEarn" component={ReferEarn} />
//       <Stack.Screen name="MyPlayHistory" component={MyPlayHistory} />
//       <Stack.Screen name="AppDetails" component={AppDetails} />
//       <Stack.Screen name="LoginScreen" component={LoginScreen} />
//     </Stack.Navigator>
//   );
// }
