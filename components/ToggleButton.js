import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

export default function ToggleButton({onPress, styles, text, color}){
    return (
        <TouchableOpacity onPress={onPress} style={[styles.answer, {backgroundColor: color}]}>
           <Text style={styles.submitBtnText}>{text}</Text> 
        </TouchableOpacity>
    )
} 