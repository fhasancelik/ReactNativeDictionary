import React from 'react';
import { Text,View ,StatusBar,StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../generalstyle/theme';

function DetailCard({border, numbText={} , nameText="" , title="" , summary=""}){
    return(
        <View style={style.maincont}>
      <View style={style.topCont}>
<Text style={style.numb}>{numbText}</Text>
<Text style={style.name} >{nameText}</Text>
      </View>
      <View style={style.bottomCont}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.summary}>{summary}</Text>
      </View>
        </View>
    )
}

const style =StyleSheet.create({
    maincont:{
        backgroundColor:"white",
        
        paddingVertical:20,
        paddingHorizontal:28,
        borderBottomWidth:1
        
    },

    topCont:{
        flexDirection:"row",
        marginTop:8

    },
    numb:{
        marginLeft:-14,
        marginRight:8,
        color:theme.colors.textLight
    },
    name:{
color:theme.colors.red
    },
    bottomCont:{
        marginTop:5
    },

    title:{
        fontSize:14,
        fontWeight:600,
        color:theme.colors.textDark
    },
    summary:{
        fontSize:14,
        fontWeight:500,
        color:theme.colors.textLight,
        marginLeft:10,
        marginTop:10
    }
})

export default DetailCard