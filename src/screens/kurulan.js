npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context


C:\rnProject\navigation_app\android\app\src\main\java\com\navigation_app\MainActivity.java

import android.os.Bundle; ekle


public class MainActivity extends ReactActivity {


    @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
  
  ekle

  npm install @react-navigation/native-stack



  */*/*/*//*/*/*/*//ÖRNEK

  
  App.js içine

  import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Anasayfa" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;