import React from 'react';

import {View, TextInput, TouchableOpacity} from 'react-native';
import MyIconStyle from './MyIconStyle';
import Icon from 'react-native-vector-icons/Ionicons';


function MyIcon({iconName,onIconPress=()=>{},color,size,style}){
    return(
<TouchableOpacity style={style} onPress={onIconPress}>
<Icon name={iconName} style={[MyIconStyle.icon]} color={color} size={size}/>
</TouchableOpacity>
    )
}

export default MyIcon