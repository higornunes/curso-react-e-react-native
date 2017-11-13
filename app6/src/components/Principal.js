import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

const logo = require('../imgs/logo.png');
const btnJogar = require('../imgs/botao_jogar.png');
const btnSobreJogo = require('../imgs/sobre_jogo.png');
const btnOutroJogo = require('../imgs/outros_jogos.png');

export default class Principal extends Component {
  render() {
    return (
      <View style={estilo.cenaPrincipal}>

        <View style={estilo.apresentacaoJogo}>
          <Image source={logo} />
          <TouchableHighlight onPress={() => { Actions.resultado(); } }>
            <Image source={btnJogar} />
          </TouchableHighlight>
        </View>

        <View style={estilo.rodaPe}>

          <TouchableHighlight onPress={ () => { Actions.sobrejogo(); } }>
            <Image source={btnSobreJogo} />
          </TouchableHighlight>

          <TouchableHighlight onPress={ () => { Actions.outrosjogos(); } }>
            <Image source={btnOutroJogo} />
          </TouchableHighlight>

        </View>

      </View>
    );
  }
}

const estilo = StyleSheet.create({
  cenaPrincipal: {
    backgroundColor: '#61BD8C',
    flex: 1
  },
  apresentacaoJogo: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 10
  },
  rodaPe: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1
  }
})
