import React, { useState } from 'react';
import {
    Text,
    TextInput,
    View,
} from 'react-native';

const TioInputField = ({label, helperText, stateHandler}) => {
    return (
        <View>
        <Text style={{marginBottom: 8, fontWeight: 'bold'}}>{label}</Text>
        <TextInput 
            placeholder={helperText} 
            value={stateHandler[0]} 
            onChangeText={e => stateHandler[1](e)}
            style={{
            borderWidth: 1,
            borderRadius: 14,
            borderColor: '#C4C4C4',
            paddingVertical: 5,
            paddingLeft: 15,
            marginBottom: 20
            }}
        />
        </View>
    )
}

module.exports = TioInputField