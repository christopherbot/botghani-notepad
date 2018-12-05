import React, { PureComponent } from 'react'
import { Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'

import App from './src/components/App/App'
import Nav from './src/components/Nav/Nav'
import { DrawerStack } from './src/components/Nav/Nav'
import ReduxNavigation from './src/navigation/ReduxNavigation'

import store from './src/state/store'

const StackNavigator = createStackNavigator({
  Home: App,
  // DrawerStack: { screen: DrawerStack },
}, {
  contentComponent: Nav,
  // navigationOptions: ({navigation}) => ({
  //   headerStyle: {backgroundColor: 'green'},
  //   title: 'Title!',
  //   headerLeft: <Text onPress={() => {
  //     console.log(navigation)
  //     navigation.navigate('DrawerOpen')
  //   }}>Menu</Text>
  // })
})

class BotghaniNotepad extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ReduxNavigation />
      </Provider>
    )
  }
}

export default BotghaniNotepad
