import React, { Component } from 'react'
import { Button, View, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setIsModalOpen, renameList, setFavouriteList } from 'state/actions'

import gStyle from 'styles/globalStyle'
import colors from 'styles/colors'
import style from './ButtonMenu.style'

class ButtonMenu extends Component {
  static propTypes = {
    list: PropTypes.object.isRequired,
    renameList: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    setFavouriteList: PropTypes.func.isRequired,
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

  setFavouriteList = () => {
    if (this.props.favouriteListId === this.props.list.id) {
      this.props.setFavouriteList(null)
    } else {
      this.props.setFavouriteList(this.props.list.id)
    }
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
              <Text
                style={style.mainTitle}
                numberOfLines={2}
                onPress={this.toggleEditModeDisplay}
              >
                { this.props.list.name }
              </Text>
            )
        }
        <View>
          <Button
            title={this.props.favouriteListId === this.props.list.id ? "💛" : "♡"}
            color={colors.cellBackground}
            onPress={this.setFavouriteList}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({ globalUi }) => ({
  favouriteListId: globalUi.favouriteListId,
})

const mapDispatchToProps = {
  renameList,
  openModal: setIsModalOpen.bind(null, true),
  setFavouriteList,
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonMenu)
