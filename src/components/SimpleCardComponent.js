import React from 'react';
import { Text,View ,Button,StyleSheet,TouchableOpacity} from 'react-native';
import theme from '../generalstyle/theme'


function SimpleCardComponent({title,onPress=()=>{}}){
    return(
<TouchableOpacity onPress={onPress}>
<View style={style.outcont}>
            <View style={style.cardcont}>
            <Text style={style.title}>
            {title}
            </Text>
        </View>
    </View>
</TouchableOpacity>
    )
}

const style=StyleSheet.create({

    outcont:{
        paddingLeft:9,
        backgroundColor:"white",
        marginTop:20,
        marginHorizontal:11,
        borderRadius:theme.radius.normal,
        paddingVertical:12,
        
    },
    cardcont:{
        backgroundColor:"white",
        
        paddingHorizontal:12
        ,
      
       


    },
    title:{
        fontWeight:"bold",
        fontSize:20,
        color:theme.colors.textDark
    },
    summary:{

        color:theme.colors.textLight,
        fontSize:18
    }
})

export default SimpleCardComponent

