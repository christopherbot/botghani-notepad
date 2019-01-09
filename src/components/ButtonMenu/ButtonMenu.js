import React, { Component } from 'react'
import { Button, View, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setIsModalOpen, renameList } from '../../state/actions'

import style from './ButtonMenu.style'
import gStyle from '../../styles/globalStyle'
import colors from '../../styles/colors'

class ButtonMenu extends Component {
  static propTypes = {
    list: PropTypes.object.isRequired,
    renameList: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
  }

  state = {
    isEditModeDisplayed: false,
    listName: this.props.list.name,
  }

  get listName() {
    return this.state.listName.trim()
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
        <View style={style.deleteButton}>
          <Button
            title="X"
            color={colors.deleteButton}
            onPress={this.props.openModal}
          />
        </View>
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

const mapDispatchToProps = { 
  renameList,
  openModal: setIsModalOpen.bind(null, true)
}

export default connect(null, mapDispatchToProps)(ButtonMenu)
