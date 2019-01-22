import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { AsyncStorage, View, Text } from 'react-native';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation'

import App from './src/components/App/App'
import ListHeader from './src/components/ListHeader/ListHeader'
import NavButton from './src/components/Buttons/NavButton/NavButton'
import Nav from './src/components/Nav/Nav'

import store from './src/state/store'

const StackNavigator = createStackNavigator({
  App,
}, {
  defaultNavigationOptions: {
    headerTitle: <ListHeader />,
    headerLeft: <NavButton />,
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
  state = {
    data : null
  }

  componentDidMount() {
    this.retrieveData("userLists")
  }

  componentWillUnmount() {
    this.storeData("userLists", "component unmounted at some point")
  }

  clearData = async () => {
    try {
      await AsyncStorage.clear()
    } catch (error) {
      console.log('error', error);
    }
  }

  storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log('error', error);
    }
  }

  retrieveData = async (key) => {
    try {
      const data = await AsyncStorage.getItem(key);
      if (data !== null) {
        // We have data!!
        alert("wowzers")
        this.setState({data})
      }
     } catch (error) {
      console.log('error', error);
       // Error retrieving data
     }
  }

  render() {
    return (
      <Provider store={store}>
        {this.state.data ?
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>{this.state.data}</Text>
          </View> :
          <AppContainer />
          }
      </Provider>
    )
  }
}

export default BotghaniNotepad
