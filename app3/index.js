import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Button } from 'react-native';
import App from './App';

class MeuComponente extends Component{
    render(){
        return(
            <View>
                {/* <Text>Primeiro Parâmentro = {this.props.prop1} </Text> */}
                <Text>{this.props.teste}</Text>
            </View>
        );
    }
}

class app3 extends Component{

    constructor(props){
        super(props);
        this.state = {texto: 'Teste2', outraVariavel: 123 };
    }

    alterarTexto(){
        this.setState({texto: 'outra coisa'});
    }

    render(){ 
        return(
            <View>
                {/* <MeuComponente prop1='prop1'></MeuComponente> */}
                <MeuComponente teste={this.state.texto} ></MeuComponente>
                <Button title='Botao'
                        onPress={() => {this.alterarTexto()}}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('app3', () => app3 );

