import React from 'react';
import { Text, View, Button, Image, StatusBar } from "react-native";
import { Actions } from 'react-native-router-flux';

export default props => (
  <Image style={{ flex: 1, width: null, marginTop: 20 }} source={require('../imgs/bg5.png')}>
    <StatusBar backgroundColor="#6dbcdb" />
    <View style={{ flex: 1, padding: 15 }}>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }} >
        <Text style={{ fontSize: 30, color: '#fff', marginBottom: 30 }} >Seja Bem-Vindo</Text>
        <Image source={require('../imgs/logo.png')}/>
      </View>

      <View style={{ flex: 1 }} >
        <Button title="Fazer Login" onPress={() => Actions.formLogin() } />  
      </View>
    </View>
  </Image>
);