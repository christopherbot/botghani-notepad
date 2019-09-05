import React, { Component } from 'react'
import { Button, View, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setIsModalOpen, renameList, setFavouriteList } from 'state/actions'
import { listPropType } from 'components/propTypeDefinitions'

import gStyle from 'styles/globalStyle'
import colors from 'styles/colors'
import style from './ButtonMenu.style'

class ButtonMenu extends Component {
  static propTypes = {
    list: listPropType.isRequired,
    renameList: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    setFavouriteList: PropTypes.func.isRequired,
    isFavouriteList: PropTypes.bool.isRequired,
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
    if (this.props.isFavouriteList) {
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
              <Text style={style.mainTitle} onPress={this.toggleEditModeDisplay}>
                { this.props.list.name }
              </Text>
            )
        }
        <View>
          <Button
            title={this.props.isFavouriteList ? '💛' : '♡'}
            color={colors.cellBackground}
            onPress={this.setFavouriteList}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({ globalUi }, ownProps) => ({
  isFavouriteList: globalUi.favouriteListId === ownProps.list.id,
})

const mapDispatchToProps = {
  renameList,
  openModal: setIsModalOpen.bind(null, true),
  setFavouriteList,
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonMenu)
