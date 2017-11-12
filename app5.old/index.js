import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';


export default class app5 extends Component {

    render() {
      return(
        true
        // <Navigator
        //   {/* initialRoute={} */}
        // />
      );
    }
}

AppRegistry.registerComponent('app5', () => app5 );
