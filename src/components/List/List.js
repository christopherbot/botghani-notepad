import React, { PureComponent }  from 'react'
import { connect } from 'react-redux'
import { deleteList, renameList } from '../../state/actions'
import PropTypes from 'prop-types'
import { View, Button, TextInput } from 'react-native'

import Table from '../Table/Table'

import style from './List.style'
import ustyle from '../../utils/style'

class List extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isEditModeDisplayed: false,
      newName : ''
    }

    this.deleteList = this.deleteList.bind(this)
    this.toggleEditModeDisplay = this.toggleEditModeDisplay.bind(this)
    this.renameList = this.renameList.bind(this)
    this.onChangeNewName = this.onChangeNewName.bind(this)
  }

  deleteList() {
    this.props.deleteList(this.props.list.id)
  }

  toggleEditModeDisplay() {
    this.setState(prevState => ({
      isEditModeDisplayed: !prevState.isEditModeDisplayed,
      newName: '',
    }))
  }

  renameList() {
    if (this.state.newName.trim()) {
      this.props.renameList(this.props.list.id, this.state.newName.trim())
      this.toggleEditModeDisplay()
    }
  }

  onChangeNewName(newName) {
    this.setState({ newName })
  }

  render() {
    return (
      <View>
        <View style={ustyle.fr1}>
          <Table list={this.props.list} />
          <Button title="X" color="#f71b1b" onPress={this.deleteList} />
          <Button
            title={this.state.isEditModeDisplayed ? 'Cancel' : 'Edit'}
            onPress={this.toggleEditModeDisplay}
            color="#000" />
          {
            this.state.isEditModeDisplayed &&
              <View>
                <Button title="Rename" color="#000" onPress={this.renameList} />
              </View>
          }
        </View>
        {
          this.state.isEditModeDisplayed &&
            <TextInput
              style={style.textInput}
              placeholder="Enter a new list name"
              onChangeText={this.onChangeNewName}
              value={this.state.newName} />
        }
      </View>
    )
  }
}


List.propTypes = {
  list: PropTypes.object.isRequired,
  deleteList: PropTypes.func.isRequired,
  renameList: PropTypes.func.isRequired,
}

const mapDispatchToProps = { deleteList, renameList }

export default connect(undefined, mapDispatchToProps)(List)
