import React, { Component } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { TabViewAnimated, SceneMap } from 'react-native-tab-view';

import TabBarMenu from './TabBarMenu';
import Conversas from './Conversas';
import Contatos from './Contatos';
import Locais from './Locais';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

// const Conversas = () => <View style={{ flex: 1, backgroundColor: '#fc4349' }} />;
// const Contatos = () => <View style={{ flex: 1, backgroundColor: '#6dbcdb' }} />;
// const Locais = () => <View style={{ flex: 1, backgroundColor: '#fff' }} />;

export default class Principal extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'locais', title: 'Locais' },
      { key: 'conversa', title: 'Conversas' },
      { key: 'contatos', title: 'Contatos' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBarMenu {...props} />;

  _renderScene = SceneMap({
    conversa: Conversas,
    contatos: Contatos,
    locais: Locais,
  });

  render() {
    return (
      <TabViewAnimated
        style={{ flex: 1 }}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}