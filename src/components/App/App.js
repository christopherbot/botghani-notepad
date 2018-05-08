import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {
  Platform,
  Text,
  View,
} from 'react-native'
import store from '../../state/store'

import TempBeerList from '../TempBeerList/TempBeerList'

import styles from './App.style.js'

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <TempBeerList />
      </Provider>
    )
  }
}

export default App
