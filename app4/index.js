import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
// import App from './App';
import { View, Text } from 'react-native';
import ListaItens from './src/components/ListaItens'
import Itens from './src/components/Itens';

export default class App extends Component {

  render() {
    return (
      <View>
        <Itens />
        <ListaItens />
      </View>
    );
  }
}

AppRegistry.registerComponent('app4', () => App);

