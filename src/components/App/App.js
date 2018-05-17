import React, { Component } from 'react'
import {
  View,
} from 'react-native'

import TempBeerList from '../TempBeerList/TempBeerList'

import styles from './App.style.js'

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <View>
        <TempBeerList />
      </View>
    )
  }
}

export default App
