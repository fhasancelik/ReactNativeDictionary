import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SearchStack from './stacks/SearchStack.js';
import HistoryView from './views/HistoryView.js'
import FavoriView from './views/FavoriView.js';
import DetailView from './views/DetailView.js';


import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();



function TabNavigator(){
    return(
<Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'History') {
            iconName = focused
              ? 'archive'
              : 'archive-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search-circle' : 'search-circle-outline';
          }else if (route.name === 'Favori') {
            iconName = focused ? 'star' : 'star-outline';
          }

          // You can return any component that you like here!
          return <Ionicons  name={iconName} size={40} color={ color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
 initialRouteName='Search' >
<Tab.Screen name="History" component={HistoryView} />
<Tab.Screen name="Search" component={SearchStack}  options={{ headerShown: false }}/>
<Tab.Screen name="Favori" component={FavoriView} />
</Tab.Navigator>
    )
}

export default TabNavigator
