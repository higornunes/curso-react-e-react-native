// import { AppRegistry } from 'react-native';
// import App from './App';
//AppRegistry.registerComponent('app1', () => App);

////////////////////////////////////////

// var React = require('react');
import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

const geraNumeroAleatorio = () => {
  var numeroAletorio = Math.random(); 
  numeroAletorio = Math.floor(numeroAletorio * 10);
  alert(numeroAletorio);
} 

const App = () => { 
  return (
    <View>
      <Text> Gerador de Números Randômico </Text>
      <Button
        title="Gerar uma número randômico"
        onPress={geraNumeroAleatorio}
      />
    </View>
  );
};

AppRegistry.registerComponent('app1', () => App );