import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class BarraNavegacao extends Component {

  render() {
    return (
      <View style={estilos.barraTitulo} >
        <Text style={estilos.titulo}>ATM consultoria</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  barraTitulo: {
    backgroundColor: '#CCC',
    padding: 10,
    height: 60
  },
  titulo: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#000'
  }
});