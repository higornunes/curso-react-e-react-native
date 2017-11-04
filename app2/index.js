// import { AppRegistry } from 'react-native';
// import App from './App';
// AppRegistry.registerComponent('app2', () => App);

///////////////////////

//Imports
import React from 'react';
import { Text , AppRegistry, View, Button } from 'react-native';

//Formatações
const Estilos = {
    principal: {
       paddingTop: 40 
    },
};

//Criar o componente
const App = () => {

    const {  } = Estilos;

    return( 
        // <View style={ principal }>
        //     <Text style={ topo }>Topo</Text>
        //     <Text style={ conteudo }>Conteúdo</Text>
        //     <Text style={  rodape }>Rodapé</Text>
        // </View>
        <View style={ principal }>

        </View>
        
    );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);