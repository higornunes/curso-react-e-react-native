import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './Principal';
import SobreJogo from './SobreJogo';
import OutrosJogos from './OutrosJogos';
import Resultado from './Resultado';

const rotas = () => (
  <Router sceneStyle={{ paddingTop: 50 }}>
    {/* <Scene key="root" component={Switch} selector={(Principal) => { return "Principal" }}/> */}
    <Scene key='principal' component={Principal} initial title="Cara ou Coroa" />
    <Scene key='sobrejogo' component={SobreJogo} title="Sobre o Jogo" />
    <Scene key='outrosjogos' component={OutrosJogos} title="Outros Jogos" />
    <Scene key='resultado' component={Resultado} title="Resultado" />
  </Router>
);

export default rotas;