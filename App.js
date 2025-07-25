// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { BackHandler } from 'react-native';
// import { useEffect } from 'react';
// import AppNavigator from './src/navigation/AppNavigator';

// export default function App() {
//   useEffect(() => {
//     const backAction = () => {
//       // You can add custom back handling logic here if needed
//       return false; // Let the system handle the back action
//     };

//     const backHandler = BackHandler.addEventListener(
//       'hardwareBackPress',
//       backAction
//     );

//     return () => backHandler.remove();
//   }, []);

//   return (
//     <NavigationContainer>
//       <AppNavigator />
//     </NavigationContainer>
//   );
// }


import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { BackHandler } from 'react-native';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppNavigator from './src/navigation/AppNavigator';

// Create a client
const queryClient = new QueryClient();

export default function App() {
  useEffect(() => {
    const backAction = () => {
      // You can add custom back handling logic here if needed
      return false; // Let the system handle the back action
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}