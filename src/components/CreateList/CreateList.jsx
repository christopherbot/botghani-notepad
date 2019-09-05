import React, { PureComponent } from 'react'
import { View, TextInput } from 'react-native'
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
    isCreateExampleListDisplayed: PropTypes.bool.isRequired,
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
        <AddButton onPress={this.createList} textStyle={style.buttonText} />
        {
          this.props.isCreateExampleListDisplayed &&
            <AddButton onPress={this.createExampleList} textStyle={style.buttonText}>
              #
            </AddButton>
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
