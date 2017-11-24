import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import ReduxThunk from 'redux-thunk';
import Routes from './Routes';
import reducers from './reducers';
import firebase from 'firebase';


class App extends Component {

  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyDHPcvD8U76DAcUoc3kL022iGyotWYI1bg",
      authDomain: "match-party.firebaseapp.com",
      databaseURL: "https://match-party.firebaseio.com",
      projectId: "match-party",
      storageBucket: "match-party.appspot.com",
      messagingSenderId: "941712632439"
    });
  }

  render() {
    return (
    <Provider store={ createStore(reducers, {}, applyMiddleware(ReduxThunk)) } >
      <Routes />
    </Provider>
    );
  }
}

export default App;
