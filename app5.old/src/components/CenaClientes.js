import React, { Component } from 'react';
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native';
import BarraNavegacao from './BarraNavegacao';


const detalhesCliente = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');


export default class CenaClientes extends Component {

  render() {
    return (
      <View>

          <BarraNavegacao/>
          <StatusBar /* hidden={true} ou hidden */ backgroundColor='#CCC'/>
          
          <View style={estilos.cabacalho}>
            <Image source={detalhesCliente}/>
            <Text style={estilos.txtCabacalho}>Nossos Clientes</Text>
          </View>

          <View style={estilos.clientes}>
            <Image source={cliente1}/>
            <Text style={estilos.txtCliente}>Nossos Clientes</Text>
          </View>

          <View style={estilos.clientes}>
            <Image source={cliente2}/>
            <Text style={estilos.txtCliente}>Nossos Clientes</Text>
          </View>

      </View>
      
    );
  }
}

const estilos = StyleSheet.create({
  cabacalho: {
    marginTop: 30,
    flexDirection: 'row'
  },
  txtCabacalho: {
    fontSize: 30,
    color: '#B9C941',
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 25
  },
  clientes: {
    fontSize: 30,
    marginTop: 30,
    padding: 20
  },
  txtCliente: {
    fontSize: 18,
    marginLeft: 20
  }
});