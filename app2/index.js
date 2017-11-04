//Imports
import React from 'react';
import {Text, AppRegistry, View, Image} from 'react-native';

//Formatações
const Estilos = {
    principal: {
       paddingTop: 40 
    },
    imagem: {
        justifyContent: 'flex-start',
        paddingTop: 5,
        paddingBottom: 5
    },
    texto: {
        backgroundColor: '#fff'
    }
};

//Criar o componente
const App = () => {

    const {principal, imagem, texto} = Estilos;

    return(
        <View style={principal}>

           {/* Relativo */}
           {/* <Image source={require('./img/uvas.png')} /> */}
           {/* Absoluto */}
           {/* <Image source={ { uri: 'https://facebook.github.io/react/img/logo_og.png'} }
                   style={ { width: 100, height: 100} } /> */}

            <Image style={imagem} source={require('./img/uvas.png')} >
                   <Text style={texto} >Legenda para foto</Text>
            </Image>       
        </View>
        
    );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);