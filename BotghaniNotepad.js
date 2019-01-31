import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation'
import { PERSIST_STATE } from 'react-native-dotenv'

import App from './src/components/App/App'
import Splash from './src/components/Splash/Splash'
import ListHeader from './src/components/ListHeader/ListHeader'
import NavButton from './src/components/Buttons/NavButton/NavButton'
import Nav from './src/components/Nav/Nav'

import store from './src/state/store'

// env variables
const persistState = PERSIST_STATE === 'true'

console.log('Persisting state:', persistState)

const StackNavigator = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      header: null,
    },
  },
  App,
}, {
  initialRouteName: 'Splash',
  defaultNavigationOptions: {
    headerTitle: <ListHeader />,
    headerLeft: <NavButton />,
    headerStyle: {
      marginTop: 29,
    },
  },
})

const MainNavigator = createDrawerNavigator({
  Home: {
    screen: StackNavigator,
  },
}, {
  contentComponent: Nav,
  drawerType: 'slide',
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
