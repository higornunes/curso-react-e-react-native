import React, { Component } from 'react';
import { View, StatusBar, Image, StyleSheet } from 'react-native';
import BarraNavegacao from './BarraNavegacao';


const logo = require('../imgs/logo.png')
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {

  render() {
    return (
      <View>
        <View>
          <BarraNavegacao/>
          <StatusBar /* hidden={true} ou hidden */ backgroundColor='#CCC'/>
        </View>

        <View style={estilos.logo}>
          <Image source={logo}/>
        </View>

        <View style={estilos.menu}>

          <View style={estilos.menuGrupo}> 
            <Image style={estilos.imgMenu} source={menuCliente}/>
            <Image style={estilos.imgMenu} source={menuContato}/>
          </View>

          <View style={estilos.menuGrupo}> 
            <Image style={estilos.imgMenu} source={menuEmpresa}/>
            <Image style={estilos.imgMenu} source={menuServico}/>
          </View>
        </View>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  logo: {
    marginTop: 30,
    alignItems: 'center'
  },
  menu: {
    alignItems: 'center'
  },
  menuGrupo: {
    flexDirection: 'row'
  },
  imgMenu: {
    margin: 15
  }
})