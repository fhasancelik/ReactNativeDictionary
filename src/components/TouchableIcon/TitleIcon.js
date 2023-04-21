import React from 'react';

import {View, TextInput, TouchableOpacity,Text} from 'react-native';
import TitleIconStyle from './TitleIconStyle';
import Icon from 'react-native-vector-icons/Ionicons';


function TitleIcon({title,iconName,onIconPress=()=>{},color,size,style}){
    return(
<TouchableOpacity style={[style,TitleIconStyle.container]} onPress={onIconPress}>
<Icon name={iconName} style={[TitleIconStyle.icon]} color={color} size={size}/>
<Text>{title}</Text>


</TouchableOpacity>
    )
}

export default TitleIcon