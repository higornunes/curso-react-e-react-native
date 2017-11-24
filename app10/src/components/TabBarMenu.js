import React from 'react';
import { View, Text, StatusBar, Image, TouchableHighlight } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { habilitaInclusaoContato } from "../actions/AppActions";

const TabBarMenu = props => (
  <View style={{ backgroundColor: '#6dbcdb', elevation: 4, marginBottom: 1 }}>

    <StatusBar backgroundColor="#2c3e50"/>

    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
      <View style={{  height: 50, justifyContent: 'center' }} >
        <Text style={{ fontSize: 20, color: '#fff', marginLeft: 20 }} >MatParty</Text>
      </View>
 
      <View style={{ flexDirection: 'row', marginRight: 20 }} >
        <View style={{ justifyContent: 'center', width: 50, alignItems: 'center' }}>
          <TouchableHighlight
            onPress={() => { Actions.adicionarContatos(); props.habilitaInclusaoContato() } }
            underlayColor='#6dbcdb'
          >
            <Image source={require('../imgs/contato.png')} />
          </TouchableHighlight>
        </View>

        <View style={{ justifyContent: 'center' }} >
          <Text style={{ fontSize: 20, color: '#fff' }} >Sair</Text>
        </View>
      </View>
    </View>

    <TabBar style={{ backgroundColor: '#6dbcdb', elevation: 0 }} {...props}/>
  </View>
);

export default connect( null, { habilitaInclusaoContato})(TabBarMenu);