import React from 'react';
import { Text,View ,Button,StyleSheet,TouchableOpacity} from 'react-native';
import theme from '../generalstyle/theme'


function CardComponent({title,summary,onPress=()=>{}}){
    return(
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
    )
}

const style=StyleSheet.create({

    outcont:{
        paddingLeft:9,
        backgroundColor:"white",
        marginTop:35,
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

        color:theme.colors.textLight,
        fontSize:18
    }
})

export default CardComponent

