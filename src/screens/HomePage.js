import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';

export default function HomePage({navigation}) {
  const [postState, setPostState] = useState({
    name: '',
    content: '',
  });

  const [bool, setBool] = useState(false);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TextInput
        onChangeText={deger => setPostState({...postState, name: deger})}
        placeholder="Adınız"
        underlineColorAndroid="blue"
        style={{width: '50%', textAlign: 'center', fontSize: 18}}></TextInput>
      {/* <TextInput
        onChangeText={()=>setBool({ bool: 'true'})}
        placeholder="TrueMu"
        underlineColorAndroid="blue"
        style={{width: '50%', textAlign: 'center', fontSize: 18}}></TextInput> */}
      <TextInput
        onChangeText={deger => setPostState({...postState, content: deger})}
        placeholder="Mesajınız"
        underlineColorAndroid="blue"
        multiline={true}
        numberOfLines={5}
        style={{width: '50%', textAlign: 'center', fontSize: 18}}></TextInput>

      <Button
        title="Gönder"
        onPress={() => {
          navigation.navigate('IkinciSayfa', {postState, bool}, setBool(true));
        }}
      />
      <View style={{marginTop:15}}>
        <Button
          title="TAZİYELER"
          color="yellowgreen"
          onPress={() => {
            navigation.navigate(
              'Taziye'
            );
          }}
        />
      </View>
    </View>
  );
}
