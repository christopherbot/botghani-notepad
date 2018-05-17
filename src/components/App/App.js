import React, { Component } from 'react'
import {
  View,
} from 'react-native'

import TempBeerList from '../TempBeerList/TempBeerList'
import List from '../List/List'

import style from './App.style.js'

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <View style={style.container}>
        <TempBeerList />
        <List />
      </View>
    )
  }
}

export default App
