import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persister } from 'state/store'
import env from '~/env'

import App from 'components/App/App'
import Splash from 'components/Splash/Splash'
import ListHeader from 'components/ListHeader/ListHeader'
import NavButton from 'components/Buttons/NavButton/NavButton'
import Nav from 'components/Nav/Nav'

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
        {this.renderAppContainer(env.persistState)}
      </Provider>
    )
  }
}

export default BotghaniNotepad
