/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from './src/core/theme';
import ListeActif from './src/screens/ActifModule/ListeActif';
import ListeBc from './src/screens/BcModule/ListeBc';
import ListeRs from './src/screens/RsModule/ListeRs';
import PostActif from './src/screens/ActifModule/PostActif';
import BcPost from './src/screens/BcModule/BcPost';

import {
  StartScreen,
  LoginScreen,
  ModulesScreen,
  AssetModules,
  BcModules,
  RsModules,

} from './src/screens';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <Provider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="StartScreen" >
            <Stack.Screen name="StartScreen" component={StartScreen} options={{ headerShown: false }} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ModulesScreen" component={ModulesScreen} options={{ headerShown: false }} />
            <Stack.Screen name="AssetModule" component={AssetModules} options={{ headerShown: true }} />
            <Stack.Screen name="BcModules" component={BcModules} options={{ headerShown: true }} />
            <Stack.Screen name="RsModules" component={RsModules} options={{ headerShown: true }} />
            <Stack.Screen name="PostActif" component={PostActif} options={{ headerShown: true }} />
            <Stack.Screen name="BcPost" component={BcPost} options={{ headerShown: true }} />
            <Stack.Screen name="ListeActif" component={ListeActif} options={{ headerShown: true }} />
            <Stack.Screen name="ListeRs" component={ListeRs} options={{ headerShown: true }} />
            <Stack.Screen name="ListeBc" component={ListeBc} options={{ headerShown: true }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
