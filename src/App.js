import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator.js';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';



const MyAppStack = createNativeStackNavigator();





function App() {
  return (
 <SafeAreaProvider>
    <NavigationContainer>
     <MyAppStack.Navigator>
      <MyAppStack.Screen  name="App" component={TabNavigator}  options={{ headerShown: false }} />
      
    </MyAppStack.Navigator>
    </NavigationContainer>
 </SafeAreaProvider>
  
  )
}

export default App