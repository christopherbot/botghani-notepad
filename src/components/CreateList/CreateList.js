import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, TextInput } from 'react-native'

import { createList } from '../../state/actions'

import style from './CreateList.style.js'

type Props = {};
class CreateList extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = { listName: '' }

    this.onChangeText = this.onChangeText.bind(this)
    this.createList = this.createList.bind(this)
  }

  onChangeText(text) {
    this.setState({ listName: text })
  }

  createList() {
    if (this.state.listName.trim()) {
      this.props.createList(this.state.listName)
    }
  }

  render() {
    return (
      <View style={style.container}>
        <TextInput
          style={style.textInput}
          placeholder="Enter a list name"
          onChangeText={this.onChangeText}
          value={this.state.listName} />
        <View style={style.buttonWrapper}>
          <Button title="Create List" onPress={this.createList} />
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = { createList }

export default connect(undefined, mapDispatchToProps)(CreateList)
