import React, { Component } from 'react'
import {
  View,
} from 'react-native'

import Lists from '../Lists/Lists'
import CreateList from '../CreateList/CreateList'

import style from './App.style.js'

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <View style={style.container}>
        <View style={style.createListWrapper}>
          <CreateList />
        </View>
        <Lists />
      </View>
    )
  }
}

export default App
