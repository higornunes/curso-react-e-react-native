import React, { Component} from 'react';
import { Text } from 'react-native';

export default class SobreJogo extends Component{
  render(){
      return (
        <Text style={{ flex: 1, backgroundColor: '#61bd8c'}}>
          Aqui podem ser apresentado informações sobre o jogo
        </Text>        
      );
    }
};