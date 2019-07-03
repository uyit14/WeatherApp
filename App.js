import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Main from './components/Main';


export default class App extends Component {
  render() {
    return (
      <Provider>
        <Main />
      </Provider>
    );
  }
}


//http://api.openweathermap.org/data/2.5/weather?APPID=02d12f3623d749e35f096a218d430d3a&q=hanoi,vn
