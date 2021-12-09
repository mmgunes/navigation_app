import React from 'react'
import { View, Text } from 'react-native'

export default function SecondPage({route}) {
    const gelen=route.params.postState;
    console.log(route);
    return (
        
        <View>
            <Text >Adınız : {route.params.postState.name}</Text>
            <Text>Mesajınız: {gelen.content}</Text>
            <Text>Mesajınız 2: {route.params.bool}</Text>
        </View>
    )
}
