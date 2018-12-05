import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import App from './src/components/App/App'

import store from './src/state/store'

const MainNavigator = createStackNavigator({
  Home: App,
})

const AppContainer = createAppContainer(MainNavigator)

class BotghaniNotepad extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

export default BotghaniNotepad
