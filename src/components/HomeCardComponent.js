import React from 'react';
import { Text,View ,Button,StyleSheet,TouchableOpacity} from 'react-native';
import theme from '../generalstyle/theme'


function HomeCardComponent({title,summary,atip,onPress=()=>{}}){
    return(
   <View style={{marginTop:35}}>
    <Text style={{marginBottom:15, marginHorizontal:11,fontSize:15,color:theme.colors.textLight}}>{atip}</Text>
    <TouchableOpacity onPress={onPress}>
<View style={style.outcont}>
            <View style={style.cardcont}>
            <Text style={style.title}>
            {title}
            </Text>
            <Text style={style.summary}>
                {summary}
            </Text>
        </View>
    </View>
</TouchableOpacity>
   </View>
    )
}

const style=StyleSheet.create({

    outcont:{
        paddingLeft:9,
        backgroundColor:"white",
      
        marginHorizontal:11,
        borderRadius:theme.radius.normal,
        paddingVertical:12,
        
    },
    cardcont:{
        backgroundColor:"white",
        
        paddingHorizontal:12
        ,
      
       
        
        borderLeftWidth:8,
        borderLeftColor:theme.colors.light,


    },
    title:{
        fontWeight:"bold",
        fontSize:20,
        color:theme.colors.textDark
    },
    summary:{

        color:theme.colors.textMedium,
        fontSize:18,
        marginTop:6
    }
})

export default HomeCardComponent

