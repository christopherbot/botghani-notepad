import React, { PureComponent } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'
import { createList, createExampleList } from 'state/actions'

import gStyle from 'styles/globalStyle'
import colors from 'styles/colors'
import style from './CreateList.style'

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
      this.props.navigation.closeDrawer()
      this.setState({ listName: '' })
    }
  }

  createExampleList = () => {
    this.props.createExampleList()
    this.props.navigation.closeDrawer()
  }

  render() {
    return (
      <View style={[gStyle.fr, gStyle.fcenterCross]}>
        <TextInput
          style={style.textInput}
          placeholder="New list"
          placeholderTextColor={colors.navText}
          selectionColor={colors.navAccent}
          onChangeText={this.onChangeText}
          value={this.state.listName}
        />
        <TouchableOpacity style={gStyle.fcenter} onPress={this.createList}>
          <Text style={style.buttonText}>
            +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[gStyle.fcenter, style.exampleButton]} onPress={this.createExampleList}>
          <Text style={style.buttonText}>
            #
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapDispatchToProps = { createList, createExampleList }

export default connect(undefined, mapDispatchToProps)(withNavigation(CreateList))
