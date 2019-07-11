/*
 * This attaches the env variables directly to the window so
 * they can be accessed anywhere by doing `env.VARIABLE`.
 *
 * This needs to be imported before everything else.
 */
import '~/env'

import React, { PureComponent } from 'react'
import { Keyboard } from 'react-native'
import { Provider } from 'react-redux'
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
  DrawerActions,
} from 'react-navigation'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persister } from 'state/store'

import App from 'components/App/App'
import Splash from 'components/Splash/Splash'
import ListHeader from 'components/ListHeader/ListHeader'
import DrawerButton from 'components/Buttons/DrawerButton/DrawerButton'
import Drawer from 'components/Drawer/Drawer'
import colors from 'styles/colors'

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
    headerLeft: <DrawerButton />,
    headerStyle: {
      marginTop: 29,
      backgroundColor: colors.headerColor,
    },
    gesturesEnabled: false, // prevents swiping the splash screen back into view
  },
})

const MainNavigator = createDrawerNavigator({
  Home: {
    screen: StackNavigator,
  },
}, {
  contentComponent: Drawer,
  drawerType: 'slide',
  drawerWidth: 230, // default is 280
})

const defaultGetStateForAction = MainNavigator.router.getStateForAction
MainNavigator.router.getStateForAction = (action, state) => {
  if (action.type === DrawerActions.MARK_DRAWER_SETTLING) Keyboard.dismiss()

  return defaultGetStateForAction(action, state)
}

const AppContainer = createAppContainer(MainNavigator)

class BotghaniNotepad extends PureComponent {
  renderAppContainer = (shouldPersistData) => {
    if (shouldPersistData) {
      return (
        <PersistGate persistor={persister} loading={null}>
          <AppContainer />
        </PersistGate>
      )
    }

    return <AppContainer />
  }

  render() {
    return (
      <Provider store={store}>
        {this.renderAppContainer(env.PERSIST_STATE)}
      </Provider>
    )
  }
}

export default BotghaniNotepad
