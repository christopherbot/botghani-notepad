import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { createStackNavigator } from 'react-navigation'

import App from './src/components/App/App'

import store from './src/state/store'

const StackNavigator = createStackNavigator({
  Home: App,
})

class BotghaniNotepad extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    )
  }
}

export default BotghaniNotepad
