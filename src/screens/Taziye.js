import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';

import axios from 'axios';

export default function Taziye({navigation}) {
  const [dataJson, setdataJson] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://van.bel.tr/Api/Gunceltaziyeler');
      setdataJson(response.data);
    };
    fetchData();
  }, []);

  let Detay = () => {
    console.warn('Tıklandım');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        {dataJson.map((repo, index) => (
          <TouchableOpacity
         

          onPress={() => {
            navigation.navigate('TaziyeDetails', repo);
          }}
            key={index}
            style={
              {
                // borderColor: index % 2 == 0 ? 'green' : 'red',
                //  borderWidth: 2,
                // marginBottom: 10,
                // padding: 10,
              }
            }>
            <View style={style.govde}>
              <View>
                <Text> Vefat Eden : {repo.vefat_eden}</Text>
              </View>
              <View>
                <Text> Telefon : {repo.tel_no}</Text>
              </View>
              <View>
                <Text> Tarih : {repo.vefat_tarihi}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
        {/* {dataJson.map((repo, index) => (
          <TouchableOpacity
            onPress={() => Detay()}
            key={index}
            style={{
              borderColor: index % 2 == 0 ? 'green' : 'red',
              borderWidth: 2,
              marginBottom: 10,
              padding: 10,
            }}>
            <View style={style.govde}>
              <View>
                <Text> Gönderen : {repo.sender_name}</Text>
              </View>
              <View>
                <Text> Mail : {repo.sender}</Text>
              </View>
              <View>
                <Text> Tarih : {repo.date}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))} */}
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  baslik: {
    flex: 20,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baslik_txt: {
    fontSize: 20,
    backgroundColor: 'red',
  },
  govde: {
    marginTop: 5,
    flex: 4,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#ddd',
  },
});
