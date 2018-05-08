import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Platform,
  Text,
  View,
  Button,
} from 'react-native'

import { createList } from '../../state/actions'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class BeerListButton extends Component<Props> {
  constructor(props) {
    super(props)

    this.addBeerList = this.addBeerList.bind(this)
  }

  addBeerList() {
    this.props.createList('beers')
  }

  render() {
    return (
      <View>
        <Text>
          Welcome to React Native!
        </Text>
        <Text>
          To get started, edit App.js
        </Text>
        <Text>
          {instructions}
        </Text>
        <Button title="add beer list" onPress={this.addBeerList} />
        { this.props.lists.map((list, i) => <Text key={i}>{list}</Text>) }
      </View>
    )
  }
}

const mapStateToProps = ({ lists }) => ({
  lists,
})

const mapDispatchToProps = { createList }

export default connect(mapStateToProps, mapDispatchToProps)(BeerListButton)
