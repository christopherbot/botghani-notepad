import React, { Component } from 'react'
import { Button, View, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { deleteList, renameList } from '../../state/actions'

import style from './ButtonMenu.style.js'
import gStyle from '../../styles/globalStyle'
import colors from '../../styles/colors'

class ButtonMenu extends Component {
  static propTypes = {
    list: PropTypes.object.isRequired,
    deleteList: PropTypes.func.isRequired,
    renameList: PropTypes.func.isRequired,
  }

  state = {
    isEditModeDisplayed: false,
    listName: this.props.list.name,
  }

  get listName() {
    return this.state.listName.trim()
  }

  deleteList = () => {
    //todo create modal to confirm deletion of list #60 -Dave 10.18
    this.props.deleteList(this.props.list.id)
  }

  toggleEditModeDisplay = () => {
    this.setState((prevState, props) => ({
      isEditModeDisplayed: !prevState.isEditModeDisplayed,
      listName: props.list.name,
    }))
  }

  onBlur = () => {
    if (this.listName && this.listName !== this.props.list.name) {
      this.props.renameList(this.props.list.id, this.listName)
    }

    this.toggleEditModeDisplay()
  }

  changeName = (listName) => {
    this.setState({ listName })
  }

  render() {
    return (
      <View style={[gStyle.fr1, gStyle.fcenter]}>
        <Button title="X" color={colors.deleteButton} onPress={this.deleteList} />
        {
          this.state.isEditModeDisplayed
            ? (
              <TextInput
                onBlur={this.onBlur}
                onChangeText={this.changeName}
                value={this.state.listName}
                autoFocus={true}
              />
            )
            : (
              <Text style={style.mainTitle} onPress={this.toggleEditModeDisplay}>
                { this.props.list.name }
              </Text>
            )
        }
      </View>
    )
  }
}

const mapDispatchToProps = { deleteList, renameList }

export default connect(undefined, mapDispatchToProps)(ButtonMenu)
