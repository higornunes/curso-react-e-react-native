import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServicos from './src/components/CenaServicos';


export default class app5 extends Component {
  render() {
    return (
        <Navigator
          initialRoute={{ id: 'principal'} }
            renderScene={(route, navigator) => {

              /* definir a cena com base na rota*/
              switch (route.id) {
                //exibe a CenaPrincipal
                case 'principal':
                  return (<CenaPrincipal navigator={navigator}/>)
                  
                //exibir a CenaClientes
                case 'cliente':
                  return (<CenaClientes navigator={navigator}/>);
                  
                //exibir a CenaContatos
                case 'contato':
                  return (<CenaContatos navigator={navigator}/>);
                
                //exibir a CenaEmpresa
                case 'empresa':
                  return (<CenaEmpresa navigator={navigator}/>);
                
                  //exibir a CenaServico
                case 'servico':
                  return (<CenaServicos navigator={navigator}/>);
                  
                default:
                  return false;
              }
            }
          }
      />
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
