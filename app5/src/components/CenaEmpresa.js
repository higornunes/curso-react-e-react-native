import React, { Component } from 'react';
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheEmpresa = require('../imgs/detalhe_empresa.png');

export default class CenaEmpresa extends Component {

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        {/* hidden={true} ou hidden */}
        <StatusBar backgroundColor='#EC7148'/>
        <BarraNavegacao voltar navigator={this.props.navigator} corFundo='#EC7148'/>

        <View style={estilos.cabecalho}>
          <Image source={detalheEmpresa} />
          <Text style={estilos.txtCabecalho}>A Empresa</Text>
        </View>

        <View style={estilos.detalheEmpresa}>
          <Text style={estilos.txtEmpresa}>Estamos no mercado a mais de 20 anos ... </Text>
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
    color: '#EC7148',
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 25
  },
  detalheEmpresa: {
    marginTop: 20,
    padding: 20
  },
  txtEmpresa: {
    fontSize: 18
  }
});