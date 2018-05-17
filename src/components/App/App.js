import React, { Component } from 'react'
import {
  View,
} from 'react-native'

import List from '../List/List'
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
        <List />
      </View>
    )
  }
}

export default App
