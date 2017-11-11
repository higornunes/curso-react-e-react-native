import React, { Component } from 'react';
import { View, Image } from 'react-native';

const img = require('../../img/jokenpo.png');

class Topo extends Component {
    render() {
        return(
            <View>
            <Image source={img} />
             </View>
        );
    }
}

export default Topo;
