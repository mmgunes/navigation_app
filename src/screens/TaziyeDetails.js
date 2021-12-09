import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const image = require('../images/vefat-taziye-banner.jpg');

export default function TaziyeDetails({route}) {
  console.log(route);
  const merhum = route.params;
  return (
    <ImageBackground
      imageStyle={{opacity: 0.8}}
      source={image}
      resizeMode="cover"
      style={styles.image}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: '700',
          color: 'white',
          textAlign: 'center',
          margin: 25,
        }}>
        Vefat Eden: {merhum.vefat_eden}
      </Text>

      <Text
        style={{
          fontSize: 20,
          color: 'white',
          textAlign: 'center',
          marginBottom: 20,
        }}>
        Taziye Sahibi: {merhum.taziye_sahibi}
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: 'white',
          textAlign: 'center',
          marginBottom: 20,
        }}>
        Yakınlık: {merhum.yakinlik}
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: 'white',
          textAlign: 'center',
          marginBottom: 20,
        }}>
        Telefon: {merhum.tel_no}
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: 'white',
          textAlign: 'center',
          marginBottom: 20,
        }}>
        Mezarlık: {merhum.mezarlik}
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: 'white',
          textAlign: 'center',
          marginBottom: 20,
        }}>
        Adres: {merhum.taziye_yeri}
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
