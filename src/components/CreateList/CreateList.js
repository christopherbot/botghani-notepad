import React, { PureComponent } from 'react'
import { View, Button, TextInput } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { createList, createExampleList } from '../../state/actions'

import style from './CreateList.style'
import ustyle from '../../utils/style'

class CreateList extends PureComponent {
  static propTypes = {
    createList: PropTypes.func.isRequired,
    createExampleList: PropTypes.func.isRequired,
  }

  state = { listName: '' }

  onChangeText = (text) => {
    this.setState({ listName: text })
  }

  createList = () => {
    if (this.state.listName.trim()) {
      this.props.createList(this.state.listName)
      this.setState({ listName: '' })
    }
  }

  render() {
    return (
      <View style={ustyle.fr}>
        <TextInput
          style={style.textInput}
          placeholder="Enter a list name"
          onChangeText={this.onChangeText}
          value={this.state.listName} />
        <View style={style.buttonWrapper}>
          <Button title="Create List" onPress={this.createList} />
        </View>
        <Button title="#" onPress={this.props.createExampleList} />
      </View>
    )
  }
}

const mapDispatchToProps = { createList, createExampleList }

export default connect(undefined, mapDispatchToProps)(CreateList)
