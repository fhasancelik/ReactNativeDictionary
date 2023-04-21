import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../generalstyle/theme'


const searchicon = <Ionicons name="search-outline" size={30} color={theme.colors.textMedium} />
const cancelicon = <Ionicons name="close-outline" size={30} color={theme.colors.textMedium} />

function SearchComponent({mystyle,onSearchFocus}) {

    const [isFocus, setIsFocus] = useState(false)
    const[inText,setIntext]=useState("")
















    function onCancel() {
        setIsFocus(false)
        setIntext("")
        Keyboard.dismiss()
    }

    function onCancelIcon(){
        if(!inText){
            setIsFocus(false)
            setIntext("")
            Keyboard.dismiss()
        }else{
            setIntext("")
        }
    }

    const [keyboardStatus, setKeyboardStatus] = useState(false);

useEffect(()=>{
    console.log(inText)
onSearchFocus(isFocus)


},[isFocus,onSearchFocus, inText])


    return (

        <View style={[style.maincont,mystyle,]}>


            <TextInput value={inText} onChangeText={((text)=>setIntext(text))} placeholderTextColor={theme.colors.textMedium} style={style.input} placeholder='Search Anything' onFocus={() => setIsFocus(true)} />
            <TouchableOpacity style={style.searchiconcont} onPress={()=>console.log(inText)} >{searchicon}</TouchableOpacity>
            {isFocus ? <TouchableOpacity style={style.canceliconcont} onPress={()=>{onCancelIcon()}} >{cancelicon}</TouchableOpacity> : null}
            {isFocus ? <TouchableOpacity onPress={() => onCancel()} style={style.textcont}><Text>Cancel</Text></TouchableOpacity> : null}


        </View>

    )
}

const style = StyleSheet.create({
    maincont: {
        position: "relative",
        flexDirection: "row",
        alignItems: "center",

        width: "100%",
    marginBottom:20,
    marginTop:80
},
       
    searchiconcont: {
        position: "absolute",
        left: 20,

    },


    canceliconcont: {
        position: "absolute",
        right: 100,


    },


    input: {

        flex: 1,
        paddingLeft: 52,
        backgroundColor: "white",
        height: 52,
        marginLeft: 8,
        marginRight:8,
        borderRadius: theme.radius.normal,
        color: theme.colors.textDark
        ,
        shadowColor: "#000000",
shadowOffset: {
  width: 0,
  height: 18,
},
shadowOpacity:  0.25,
shadowRadius: 20.00,
elevation: 24

    },


    textcont: {

        maxHeight: 52,
        minHeight: 52,
        alignItems: "center",
        justifyContent: "center",
        padding: 12,
        marginLeft: 10,
        marginRight:8,
        borderRadius: theme.radius.normal,
    

    },



})

export default SearchComponent