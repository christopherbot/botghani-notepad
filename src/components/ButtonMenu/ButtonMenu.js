import React, { Component } from 'react'
import { Button, View, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { deleteList, renameList } from '../../state/actions'

import style from './ButtonMenu.style.js'
import ustyle from '../../utils/style'

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

  deleteList = () => {
    //todo create modal to confirm deletion of list #60 -Dave 10.18
    this.props.deleteList(this.props.list.id)
  }

  toggleEditModeDisplay = () => {
    this.setState(prevState => ({
      isEditModeDisplayed: !prevState.isEditModeDisplayed,
    }))
  }

  renameList = () => {
    if (this.state.listName.trim()) {
      this.props.renameList(this.props.list.id, this.state.listName.trim())
      this.toggleEditModeDisplay()
    }
  }

  onChangeName = (listName) => {
    this.setState({ listName })
  }

  render() {
    return (
      <View style={[ustyle.fr1, ustyle.fcenter]}>
        <Button title="X" color="#f71b1b" onPress={this.deleteList} />
        {
          this.state.isEditModeDisplayed
            ? (
              <TextInput
                onBlur={this.renameList}
                onChangeText={this.onChangeName}
                value={this.state.listName}
                autoFocus={true}
              />
            )
            : (
              <Text style={style.mainTitle} onPress={this.toggleEditModeDisplay}>
                { this.state.listName }
              </Text>
            )
        }
      </View>
    )
  }
}

const mapDispatchToProps = { deleteList, renameList }

export default connect(undefined, mapDispatchToProps)(ButtonMenu)
