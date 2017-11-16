import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

import { Topo, Resultado, Painel } from './components';

export default class App extends Component {
	constructor(props) {
	  super(props);
    this.state = { num1: '', num2: '', operacao: 'soma', resultado:'' };

    // BINDS
    this.calcular = this.calcular.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
    this.atulizaOperacao = this.atulizaOperacao.bind(this)
  };

	calcular() {
    // console.log('Sim, vamos calcular');
    let resultado = 0;
    switch (this.state.operacao) {
      case 'soma':
      resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
      break;
      
      case 'subtracao':
      resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
      break;
      
      default:
      resultado = 0;
    }
    // console.log(resultado);
    this.setState({ resultado: resultado.toString() });
  }

  atulizaOperacao (operacao){
    // console.log(operacao);
    this.setState({ operacao: operacao });
  }

  atualizaValor (nomeCampo, numero) {
    // console.log('atualiza valor');
    // console.log(numero);
    // this.setState({ nomeCampo: numero }); const obj = {};
    obj = {};
    obj[nomeCampo] = numero;
    // console.log(o bj);
    this.setState(obj);

  }

	render () {
	 	return(
			<View>
				<Topo/>
				<Resultado resultado={this.state.resultado}/>
				<Painel 
					num1={this.state.num1}
					num2={this.state.num2}
					operacao={this.state.operacao}
					calcular={this.calcular}
					atulizaOperacao={this.atulizaOperacao}
					atualizaValor={this.atualizaValor}
				/>
			</View>
	 	);
	}
}
