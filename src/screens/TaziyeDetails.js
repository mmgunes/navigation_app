import React from 'react'
import { View, Text } from 'react-native'

export default function TaziyeDetails({route}) {
    const merhum=route.params; 
    return (
        
        <View>
            <Text>Vefat Eden: {merhum.vefat_eden} </Text>
            <Text>Adres: {merhum.taziye_yeri} </Text>
            <Text>Telefon: {merhum.tel_no} </Text>
        </View>
    )
}
