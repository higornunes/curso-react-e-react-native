import React, { Component } from 'react';
import { View, TextInput, Button, Text, Image, ActivityIndicator, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, modificaNome, cadastraUsuario } from "../actions/AutenticacaoActions";

class formCadastro extends Component {

  _cadastraUsuario () {
    const { nome, email, senha } = this.props;
    this.props.cadastraUsuario({ nome, email, senha });
  }

  renderBtnCadastro () {

    if (this.props.loadingCadastro){
      return (
        <ActivityIndicator size="large" />
      )
    }
    return (
      <Button
        title="Cadastrar"
        color="#6dbcdb"
        onPress={() => this._cadastraUsuario()}
      />
    )
  }

  render () {
    return (
      <Image source={require('../imgs/bg5.png')} style={{ flex: 1, width: null }}>
        <View style={{ flex: 1, padding: 10 }} >
          <StatusBar backgroundColor='#6dbcdb' />
          <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }} >
            <Text style={{ fontSize: 50, color: '#fff' }}>MatParty</Text>
            <Text style={{ color: '#fff' }}>O NÃO você já tem! =)</Text>
          </View>
   
          <View style={{ flex: 2, padding: 10, justifyContent: 'center' }} >
            <TextInput 
              value={this.props.nome} 
              style={{ fontSize: 20, height: 45, color: '#fff' }} 
              onChangeText={texto => this.props.modificaNome(texto)} 
              placeholder="Nome" 
              placeholderTextColor='#fff'
            />
            <TextInput 
              value={this.props.email} 
              style={{ fontSize: 20, height: 45, color: '#fff' }} 
              onChangeText={texto => this.props.modificaEmail(texto)} 
              placeholder="Email" 
              placeholderTextColor='#fff'
            />
            <TextInput 
              secureTextEntry value={this.props.senha} 
              style={{ fontSize: 20, height: 45, color: '#fff' }} 
              onChangeText={texto => this.props.modificaSenha(texto)} 
              placeholder="Senha" 
              placeholderTextColor='#fff'
            />
            <Text style={{ color: '#ff0000', fontSize: 18 }} >{this.props.erroCadastro}</Text>
          </View>
  
          <View style={{ flex: 3, padding: 10 }}>
            {this.renderBtnCadastro()}
          </View>
  
        </View>
      </Image>
    ); 
  }
};

const mapStateTopProps = state => ( 
  {
    nome: state.AutenticacaoReducer.nome,
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha,
    erroCadastro: state.AutenticacaoReducer.erroCadastro,
    loadingCadastro: state.AutenticacaoReducer.loadingCadastro
  }
); 

export default connect(mapStateTopProps, 
  { 
    modificaEmail: modificaEmail, 
    modificaSenha: modificaSenha, 
    modificaNome: modificaNome,
    cadastraUsuario: cadastraUsuario
  }
)(formCadastro);
  