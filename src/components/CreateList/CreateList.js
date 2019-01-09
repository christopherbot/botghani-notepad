import React, { PureComponent } from 'react'
import { View, Button, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'
import { createList, createExampleList } from '../../state/actions'

import style from './CreateList.style'
import gStyle from '../../styles/globalStyle'
import colors from '../../styles/colors'

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
      <View style={gStyle.fr}>
        <TextInput
          style={style.textInput}
          placeholder="Enter a list name"
          placeholderTextColor={colors.navText}
          selectionColor={colors.navAccent}
          onChangeText={this.onChangeText}
          value={this.state.listName}
        />
        <View style={style.buttonWrapper}>
          <Button title="Create List" color={colors.navAccent} onPress={this.createList} />
        </View>
        <View style={style.exampleListButton}>
          <Button
            title="#"
            color={colors.exampleListButton}
            onPress={this.createExampleList}
          />
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = { createList, createExampleList }

export default connect(undefined, mapDispatchToProps)(withNavigation(CreateList))
