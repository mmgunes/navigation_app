import React, {useState, useEffect} from 'react';

import {Card, ThemeProvider} from 'react-native-elements';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';

import axios from 'axios';

export default function CardUse({navigation}) {
  const [dataJson, setdataJson] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://van.bel.tr/Api/Gunceltaziyeler');
      setdataJson(response.data);
    };
    fetchData();
  }, []);

  return (
    <ScrollView style={{flex: 1}}>
      {dataJson.map((u, i) => {
        return (
          <TouchableOpacity
          key={i}
            onPress={() => {
              navigation.navigate('TaziyeDetails', u);
            }}>
            <Card>
              <Card.Title style={{fontWeight:'800',color:'black'}}>{u.vefat_eden}</Card.Title>
              <Card.Divider />
              <View key={i} style={{ flex:1,flexDirection:'row', justifyContent:'space-around'}}>
                {/* <Image resizeMode="cover" source={{uri: u.avatar}} /> */}
                <Text>Vefat Tarihi : {u.vefat_tarihi}</Text>
                <Text>Yaş: {u.yasi}</Text>
              </View>
            </Card>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const users = [
  {
    name: 'brynn',
    avatar: 'https://pbs.twimg.com/media/EweBsBNWgAYaRDa.jpg',
  },
  {
    name: 'brynn',
    avatar: 'https://pbs.twimg.com/media/EweBsBNWgAYaRDa.jpg',
  },
  {
    name: 'brynn',
    avatar: 'https://pbs.twimg.com/media/EweBsBNWgAYaRDa.jpg',
  },
  {
    name: 'brynn',
    avatar: 'https://pbs.twimg.com/media/EweBsBNWgAYaRDa.jpg',
  },
  {
    name: 'brynn',
    avatar: 'https://pbs.twimg.com/media/EweBsBNWgAYaRDa.jpg',
  },
  {
    name: 'brynn',
    avatar: 'https://pbs.twimg.com/media/EweBsBNWgAYaRDa.jpg',
  },

  {
    name: 'brynn',
    avatar: 'https://pbs.twimg.com/media/EweBsBNWgAYaRDa.jpg',
  },
  {
    name: 'brynn',
    avatar: 'https://pbs.twimg.com/media/EweBsBNWgAYaRDa.jpg',
  },
  {
    name: 'brynn',
    avatar: 'https://pbs.twimg.com/media/EweBsBNWgAYaRDa.jpg',
  },
];
