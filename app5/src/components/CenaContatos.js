import React, { Component } from 'react';
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalhesContato = require('../imgs/detalhe_contato.png');

export default class CenaContatos extends Component {

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        {/* hidden={true} ou hidden */}
        <StatusBar backgroundColor='#61bc8c'/>
        <BarraNavegacao voltar navigator={this.props.navigator} corFundo='#61bc8c'/>

        <View style={estilos.cabacelho}>
          <Image source={detalhesContato}/>
          <Text style={estilos.txtCabacalho}>Contatos</Text>
        </View>

        <View style={estilos.detalheContatos}>
          <Text style={estilos.txtContatos}>Tel: 0 (27) 9 999 999 999</Text>
          <Text style={estilos.txtContatos}>Cel: 0 (27) 9 999 999 999</Text>
          <Text style={estilos.txtContatos}>Email: helium@heliummail.com</Text>
        </View>

      </View>

    );
  }
}

const estilos = StyleSheet.create({
  cabacelho: {
    marginTop: 30,
    flexDirection: 'row'
  },
  txtCabacelho: {
    fontSize: 30,
    color: '#61bc8c',
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 25
  },
  detalheContatos: {
    marginTop: 20,
    padding: 20
  },
  txtContatos: {
    fontSize: 18
  }
});