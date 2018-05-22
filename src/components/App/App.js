import React, { PureComponent } from 'react'
import { View } from 'react-native'

import Lists from '../Lists/Lists'
import CreateList from '../CreateList/CreateList'

import style from './App.style.js'

class App extends PureComponent {
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
