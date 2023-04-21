import React from 'react';
import { Text,View ,StatusBar,StyleSheet,FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../generalstyle/theme';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import MyIcon from '../components/TouchableIcon/MyIcon';
import TitleIcon from '../components/TouchableIcon/TitleIcon';
import DetailCard from '../components/DetailCard';


const DATA = [
  {
    id: '1',
    name: 'First Item',
    title:"react prop",
    summary:"react summary"
  },
  {
    id: '2',
    name: 'First Item2',
    title:"react prop",
    summary:"react summary"
  },
  {
    id: '3',
    name: 'First Item3',
    title:"react prop",
    summary:"react summary"
  },
  {
    id: '4',
    name: 'First Item',
    title:"react prop",
    summary:"react summary"
  },

];

function DetailView() {
  const insets = useSafeAreaInsets();
    return (
  
   
          <View style={[
          styles.container,
          {
            backgroundColor: theme.colors.light,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}>
        
        <StatusBar barStyle="light-content" backgroundColor={theme.colors.softRed} />
       
<View style={styles.body}>
<View style={styles.headerConta}>
        <Text style={styles.header}>
          Detail
        </Text>
        <Text style={styles.summary}>
          Detail Caption
        </Text>
       </View>
       
        <View style={styles.iconBox}>
        <View style={styles.lefticonBox}>


        <MyIcon style={styles.selfIcon} size={40} color={theme.colors.textLight} iconName="volume-medium"/>
          <MyIcon style={styles.selfIcon}  size={40} color={theme.colors.red} iconName="bookmark"/>


        </View>
         <TitleIcon style={styles.titleIcon} iconName="search-circle-outline"  size={40} color={theme.colors.textDark} title="More Results"/>
        </View>

        <View style={{flex:1,paddingHorizontal:15}}>
       
          <FlatList
        data={DATA}
        renderItem={({item}) => <DetailCard numbText={item.id} nameText={item.name} title={item.title} summary={item.summary}/>}
        keyExtractor={item => item.id}
     
        style={{marginTop:10}}
      />
       
       
        </View>
</View>
      </View>
   
  
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
   
  
    },
    headerConta:{
      paddingHorizontal:15,
      marginTop:10,
      marginBottom:15
    },

    body:{
flex:1,


    },

header:{
fontSize:32,
fontWeight:"bold",
color:theme.colors.textDark
},
summary:{
color:theme.colors.textLight,
marginTop:10

},

    iconBox:{
      flexDirection:"row",
      alignItems: "center",
      justifyContent:"space-between",
      paddingHorizontal:10,
      marginTop:10,
      marginBottom:10,
     
    },
    lefticonBox:{
      flexDirection:"row"
    },
    selfIcon:{
  
      backgroundColor:"white",
      borderRadius:theme.radius.full,
      alignItems:"center",
      justifyContent:"center",
      padding:5,
      margin:5
    },
    titleIcon:{
      backgroundColor:"white",
      borderRadius:theme.radius.full,
      alignItems:"center",
      justifyContent:"center",
     padding:5,
      margin:5,
      gap:10
    }
  });

  export default DetailView