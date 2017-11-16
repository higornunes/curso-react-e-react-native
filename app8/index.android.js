'use strict';
import firebase from 'firebase';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text, Button } from 'react-native';

class Android extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { pontuacao: 0 };
  // }

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyDppyzU4dvyWVbNXaYlXwojZgw_kqJsq5k",
      authDomain: "app8-firebase-e34f8.firebaseapp.com",
      databaseURL: "https://app8-firebase-e34f8.firebaseio.com",
      projectId: "app8-firebase-e34f8",
      storageBucket: "",
      messagingSenderId: "41765744498"
    };
    firebase.initializeApp(config);
  }

  cadastrarUsuario () {
    var email = "hfn@gmail.com";
    var senha = "123456";

    const usuario = firebase.auth();
    usuario.createUserWithEmailAndPassword(
      email,
      senha
    ).catch(
      (e) => {
        //e.code, e.message 
        var messagemErro = "";
        if( e.code =="auth/weak-password"){
          messagemErro = "A senha deve ser maior que 6 caracteres";
        }
        alert( messagemErro );
        // alert( e.message );
      }
    );
  } 
  // salvarDados () {
  //   // var database = firebase.database();
  //   // database.ref("raiz").set("valor1");
  //   // database.ref("raiz").remove();
  //   var funcionarios = firebase.database().ref("funcionarios");
  //   // funcionarios.child("001").child("nome").set("hfn");
  //   // funcionarios.child("002").child("nome").set("nfh");
  //   // funcionarios.child("001").remove(); 
  //   // funcionarios.remove(); //remove todos

  //   // funcionarios.push().child("nome").set("hfn");
  //   funcionarios.push().set(
  //     {
  //       nome: "hfn",
  //       altura: "1,82",
  //       peso: "79kg"
  //     }
  //   );
  // }

  // listarDados () {
  //  var pontuacao = firebase.database().ref("pontuacao");
  //  pontuacao.on('value', (snapshot) => { 
  //    var pontos = snapshot.val();
  //    this.setState( {pontuacao: pontos } );
  //   });
  // } 
  verifcarUsuarioLogado () {
    const usuario = firebase.auth();
    const usuarioAtual = usuario.currentUser;
    //   if (usuarioAtual) {
    //     alert("Usuário está logado");
    //   }else{
    //     alert("Usuário não está logado");
    //   }

    //LISTENER
    usuario.onAuthStateChanged(
      (usuarioAtual) => {
        if (usuarioAtual) {
          alert("Usuário está logado");
        }else{
          alert("Usuário não está logado");
        }
      }
    );
  }

  deslogarUsuario () {
    const usuario = firebase.auth();
    usuario.signOut();
  }

  logarUsuario () {
    var email = "hfn@gmail.com";

    // var senha = "senha errada";

    //senha certa
    var senha = "123456";
    const usuario = firebase.auth();

    usuario.signInWithEmailAndPassword(
      email,
      senha
    ).catch(
      (e) => {
        alert(e.message);
        // alert( e.message );
      }
    ); 
  }

  render() {
    // let {pontuacao} = this.state;
    return (
      <View>
        {/* <Button
          onPress={ () =>{ this.salvarDados(); } }
          title="Salva Dados"
          color="#841584"
          accessibilityLabel="Salvar dados"
        /> */}
        {/* <Button
          onPress={() => { this.listarDados(); }}
          title="Listar Dados"
          color="#841584"
          accessibilityLabel="Listar dados"
        /> */}
        {/* <Text>{pontuacao}</Text> */}
        <Button
          onPress={() => { this.cadastrarUsuario(); } }
          title="Cadastrar Usuário"
          color="#841584"
          accessibilityLabel="Salvar dados"
        />
        <Button
          onPress={ () => { this.verifcarUsuarioLogado(); } }
          title="Verifica usuário logado"
          color="#841584"
          accessibilityLabel="Verifica usuário logado"
        />
        <Button
          onPress={() => { this.deslogarUsuario(); } }
          title="Deslogar usuário"
          color="#841584"
          accessibilityLabel="Deslogar usuário"
        />
        <Button
          onPress={() => { this.logarUsuario(); } }
          title="Logar usuário"
          color="#841584"
          accessibilityLabel="Logar usuário"
        />
 
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('app8', () => Android);