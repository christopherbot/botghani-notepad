import React, { PureComponent } from 'react'
import { View, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'
import { createList, createExampleList } from 'state/actions'

import Button from 'components/Buttons/Button/Button'

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
          placeholderTextColor={colors.drawerText}
          selectionColor={colors.drawerAccent}
          onChangeText={this.onChangeText}
          value={this.state.listName}
        />
        <Button onPress={this.createList} textStyle={style.buttonText}>
          +
        </Button>
        {
          this.props.isCreateExampleListDisplayed &&
            <Button onPress={this.createExampleList} textStyle={style.buttonText}>
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
