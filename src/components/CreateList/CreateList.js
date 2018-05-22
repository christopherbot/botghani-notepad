import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { View, Button, TextInput } from 'react-native'

import { createList } from '../../state/actions'

import style from './CreateList.style.js'

class CreateList extends PureComponent {
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
      this.setState({ listName: '' })
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

CreateList.propTypes = {
  createList: PropTypes.func.isRequired,
}

const mapDispatchToProps = { createList }

export default connect(undefined, mapDispatchToProps)(CreateList)
