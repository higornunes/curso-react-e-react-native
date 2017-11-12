import React, { Component } from 'react';
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheServico = require('../imgs/detalhe_servico.png');

export default class CenaServicos extends Component {

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        {/* hidden={true} ou hidden */}
        <StatusBar backgroundColor='#19D1D8'/>
        <BarraNavegacao voltar navigator={this.props.navigator} corFundo='#19D1D8'/>

        <View style={estilos.cabecalho}>
          <Image source={detalheServico} />
          <Text style={estilos.txtCabecalho}>Nosso Serviços</Text>
        </View>

        <View style={estilos.detalheServico}>
          <Text style={estilos.txtServico}> Consultoria </Text>
          <Text style={estilos.txtServico}> Processo </Text>
          <Text style={estilos.txtServico}> Acomplamento Projetos </Text>
        </View>

      </View>

    );
  }
}

const estilos = StyleSheet.create({
  cabecalho: {
    marginTop: 30,
    flexDirection: 'row'
  },
  txtCabecalho: {
    fontSize: 30,
    color: '#19D1D8',
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 25
  },
  detalheServico: {
    marginTop: 20,
    padding: 20
  },
  txtServico: {
    fontSize: 18
  }
});