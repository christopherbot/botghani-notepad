import React, { PureComponent } from 'react'
import { View } from 'react-native'

import CreateList from '../CreateList/CreateList'
import Lists from '../Lists/Lists'

import style from './App.style'
import ustyle from '../../utils/style'

class App extends PureComponent {
  render() {
    return (
      <View style={ustyle.f1}>
        <View style={style.createListWrapper}>
          <CreateList />
        </View>
        <Lists />
      </View>
    )
  }
}

export default App
