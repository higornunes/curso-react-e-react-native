import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableHighlight } from 'react-native';

const btnVoltar = require('../imgs/btn_voltar.png');  

export default class BarraNavegacao extends Component {

  render() {
    if(this.props.voltar){
      return (
        <View style={[estilos.barraTitulo, { backgroundColor: this.props.corFundo }]}>
          <TouchableHighlight underlayColor={this.props.corFundo} activeOpacity={0.3} onPress={() => this.props.navigator.pop()}>
            <Image source={btnVoltar}/>
          </TouchableHighlight>
          <Text style={estilos.titulo}>Cangaceiras</Text>
        </View>
      );
    }
    return (
      <View style={estilos.barraTitulo}>
        <Text style={estilos.titulo}>Cangaceiras</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  barraTitulo: {
    flexDirection: 'row',
    backgroundColor: '#CCC',
    padding: 10,
    height: 60
  },
  titulo: {
    flex: 1,
    fontSize: 24,
    textAlign: 'center',
    color: '#000'
  }
});