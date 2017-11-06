//Imports
import React from 'react';
import {Text, AppRegistry, View, Image, TouchableOpacity, Alert} from 'react-native';

//Formatações
const Estilos = {
    principal: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botao: {
         backgroundColor: '#538530',
         paddingVertical: 10,
         paddingHorizontal: 30,
         marginTop: 20
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
};

const gerarNovaFrase = () => {
    var numeroAletorio = Math.random();
    numeroAletorio = Math.floor(numeroAletorio * 5);

    //frases
    var frases = Array();


    frases[0]='teste 1';
    frases[1]='teste 2';
    frases[2]='teste 3';
    frases[3]='teste 4';
    frases[4]='teste 5';
    
    var fraseEscolhida = frases[numeroAletorio];
    Alert.alert(fraseEscolhida);

};

//Criar o componente
const App = () => {

    const {principal, botao, textoBotao} = Estilos;

    return(
        <View style={principal}>
            <Image source={require('./img/logo.png')} />

            <TouchableOpacity 
                onPress={gerarNovaFrase}
                style={botao}>
                <Text style={textoBotao} >Nova Frase</Text>
            </TouchableOpacity>

        </View>
        
    );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);