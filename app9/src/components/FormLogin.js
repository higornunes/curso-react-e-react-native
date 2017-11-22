import React, { Component } from 'react';
import { View, Text, TextInput, Button, StatusBar, StyleSheet, TouchableHighlight, Image, ActivityIndicator } from 'react-native';

import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";

import { modificaEmail, modificaSenha, autenticarUsuario } from "../actions/AutenticacaoActions";

class formLogin extends Component {

  _autenticarUsuario () {
    const { email, senha } = this.props;
    this.props.autenticarUsuario({ email, senha });
  } 


  renderBtnAcessar () {

    if (this.props.loadingLogin) {
      return ( 
        <ActivityIndicator size="large"/> 
      )
    }
    return (
      <Button 
          title="Acessar" 
          color="#6dbcdb" 
          onPress={() => this._autenticarUsuario()} 
      />
    )
  }
  render () {
  return(
    <Image source={require('../imgs/bg5.png')} style={{ flex: 1, width: null }}> 
        <StatusBar backgroundColor="#6dbcdb" />
        <View style={{ flex: 1, padding: 10 }}>
          <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center'}} >
            <Text style={{ fontSize: 50, color: '#fff' }}>MatParty</Text>
          </View>

          <View style={{ flex: 2, padding: 10 }}>
            <TextInput 
              onChangeText={texto => this.props.modificaEmail(texto)} 
              value={this.props.email} 
              style={{ fontSize: 20, height: 45, color: '#fff' }} 
              placeholder="Email" 
              placeholderTextColor='#fff'
            />
            <TextInput 
              secureTextEntry={true} 
              onChangeText={texto => this.props.modificaSenha(texto)} 
              value={this.props.senha} 
              style={{ fontSize: 20, height: 45, color: '#fff' }} 
              placeholder="Senha" placeholderTextColor='#fff'
            />
            <Text style={{ color: '#ff0000', fontSize: 20 }}>
              {this.props.erroLogin}
            </Text>
            <View style={{ flexDirection: 'row' }} >
              <Text style={{ color: '#fff'}} > Ainda não possui castrastro? </Text>
              <TouchableHighlight onPress={() => Actions.formCadastro() }>
              <Text style={{ color: '#6dbcdb' }} > Cadastre-se aqui! </Text>
              </TouchableHighlight>
            </View>

          </View>

          <View style={{ flex: 3, padding: 10 }}>
            {this.renderBtnAcessar()}
          </View> 
        </View>
       </Image>
    );
  }
}


const mapStateToProps = state => (
  {
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha,
    erroLogin: state.AutenticacaoReducer.erroLogin,
    loadingLogin: state.AutenticacaoReducer.loadingLogin
  }
)

export default connect(mapStateToProps, 
  { 
    modificaEmail, 
    modificaSenha, 
    autenticarUsuario 
  }
)(formLogin);