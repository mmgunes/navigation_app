import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomePage from '../screens/HomePage';
import FirstPage from '../screens/FirstPage';
import SecondPage from '../screens/SecondPage';
import Taziye from '../screens/Taziye';
import TaziyeDetails from '../screens/TaziyeDetails';

const Stack = createNativeStackNavigator();

function Route() {
  return (
    <NavigationContainer>
      {/*  <Stack.Navigator initialRouteName='IkıncıSayfa'>
        <Stack.Screen name="Ana Sayfa" component={HomePage} /> */}
      <Stack.Navigator
        screenOptions={{headerStyle: {backgroundColor: 'papayawhip'}}}>
        <Stack.Screen
          name="Home"
          options={{title: 'AnaSayfa2'}}
          component={HomePage}
        />
        <Stack.Screen
          name="IlkSayfa"
          component={FirstPage}
          options={{title: 'İlk Sayfa'}}
        />
        <Stack.Screen
          name="IkinciSayfa"
          component={SecondPage}
          options={{title: 'İkinci Sayfa'}}
        />
        <Stack.Screen
          name="Taziye"
          component={Taziye}
          options={{title: 'TAZİYELER'}}
        />
        <Stack.Screen
          name="TaziyeDetails"
          component={TaziyeDetails}
          options={{title: 'Taziye Detay'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
