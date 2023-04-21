import React from 'react';
import { Text,View ,Button} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailView from '../views/DetailView';
import SearchView from '../views/SearchView';
import theme from '../generalstyle/theme';
import MyIcon from '../components/TouchableIcon/MyIcon';





const MySearchStack = createNativeStackNavigator();


function SearchStack() {
  return (
    <MySearchStack.Navigator>
      <MySearchStack.Screen name="Search" component={SearchView}  options={{ headerShown: false }} />
      <MySearchStack.Screen name="Detail" component={DetailView} options={({route,navigation})=>{
        return{
          title:(route.params && route.params.title) || "",
       headerStyle:{
        backgroundColor:theme.colors.softRed,
      
       },

       headerLeft:()=>(
<MyIcon style={{marginRight:12}} iconName="caret-back" size={30} color={theme.colors.textDark} onIconPress={()=>{navigation.navigate("Search")}}/>
       ),
       headerRight:()=>(
        <MyIcon style={{marginRight:8}} iconName="infinite" size={30} color={theme.colors.textDark} />
               ),

        }
      }} />
    </MySearchStack.Navigator>
  );
  
}




  export default SearchStack