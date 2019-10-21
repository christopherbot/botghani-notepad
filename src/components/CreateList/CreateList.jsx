import React, { PureComponent } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'
import { createList, createExampleList } from 'state/actions'

import Button from 'components/Buttons/Button/Button'
import ColorPicker, { DEFAULT_LIST_COLORS } from 'components/ColorPicker/ColorPicker'

import gStyle from 'styles/globalStyle'
import colors from 'styles/colors'
import style from './CreateList.style'

class CreateList extends PureComponent {
  static propTypes = {
    createList: PropTypes.func.isRequired,
    createExampleList: PropTypes.func.isRequired,
    isCreateExampleListDisplayed: PropTypes.bool.isRequired,
    navigation: PropTypes.object.isRequired,
  }

  static ListTypes = {
    TEXT: 'text',
    CHECKLIST: 'checklist',
  }

  state = {
    listName: '',
    listType: CreateList.ListTypes.TEXT,
    listColor: DEFAULT_LIST_COLORS[0],
    isNameInvalid: false,
  }

  onChangeListName = (listName) => {
    this.setState({
      listName,
      isNameInvalid: false,
    })
  }

  onSelectTextList = () => {
    this.setState({ listType: CreateList.ListTypes.TEXT })
  }

  onSelectChecklist = () => {
    this.setState({ listType: CreateList.ListTypes.CHECKLIST })
  }

  onChangeListColor = (listColor) => {
    this.setState({ listColor })
  }

  createList = () => {
    if (!this.state.listName.trim()) {
      this.setState({ isNameInvalid: true })

      return
    }

    this.props.createList(
      this.state.listName,
      this.state.listType === CreateList.ListTypes.CHECKLIST,
      this.state.listColor,
    )
    this.props.navigation.closeDrawer()
    this.setState({ listName: '' })
  }

  createExampleList = () => {
    this.props.createExampleList()
    this.props.navigation.closeDrawer()
  }

  render() {
    return (
      <View style={gStyle.fc}>
        <TextInput
          style={[
            style.textInput,
            this.state.isNameInvalid && style.invalidTextInput,
          ]}
          placeholder="Enter list name"
          placeholderTextColor={colors.drawerText}
          selectionColor={colors.drawerAccent}
          onChangeText={this.onChangeListName}
          value={this.state.listName}
        />
        <View style={[gStyle.fr, style.toggleButtonWrapper]}>
          <TouchableOpacity
            onPress={this.onSelectTextList}
            style={[
              style.toggleButton,
              this.state.listType === CreateList.ListTypes.TEXT && style.activeToggleButton,
            ]}
          >
            <Text>
              Text
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.onSelectChecklist}
            style={[
              style.toggleButton,
              this.state.listType === CreateList.ListTypes.CHECKLIST && style.activeToggleButton,
            ]}
          >
            <Text>
              Checklist
            </Text>
          </TouchableOpacity>
        </View>
        <View style={style.colorPickerWrapper}>
          <ColorPicker
            colors={DEFAULT_LIST_COLORS}
            activeColor={this.state.listColor}
            onChangeColor={this.onChangeListColor}
          />
        </View>
        <Button
          onPress={this.createList}
          buttonStyle={style.createButton}
          textStyle={style.createButtonText}
        >
          Create
        </Button>
        {
          this.props.isCreateExampleListDisplayed &&
            <Button onPress={this.createExampleList} textStyle={style.createButtonText}>
              #
            </Button>
        }
      </View>
    )
  }
}

const mapStateToProps = () => ({
  isCreateExampleListDisplayed: env.DEBUG,
})

const mapDispatchToProps = { createList, createExampleList }

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(CreateList))
