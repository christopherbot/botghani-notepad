import React, { PureComponent } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'
import { createList, createExampleList } from 'state/actions'

import AddButton from 'components/Buttons/AddButton/AddButton'

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
        <AddButton onPress={this.createList} textStyle={style.buttonText} />
        <AddButton onPress={this.createExampleList} textStyle={style.buttonText}>
          #
        </AddButton>
      </View>
    )
  }
}

const mapDispatchToProps = { createList, createExampleList }

export default connect(undefined, mapDispatchToProps)(withNavigation(CreateList))
