import React, {PureComponent}  from 'react'
import { connect } from 'react-redux'
import { deleteList, renameList } from '../../state/actions'
import PropTypes from 'prop-types'
import { Text, View, Button, TextInput } from 'react-native'

import style from './List';

class List extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      showEditInput: false,
      newName : ''
    }

    this.deleteList = this.deleteList.bind(this)
    this.editCurrentName = this.editCurrentName.bind(this)
    this.cancelEditInput = this.cancelEditInput.bind(this)
    this.enterNewListName = this.enterNewListName.bind(this)
    this.setNewName = this.setNewName.bind(this)
  }

  deleteList() {
    this.props.deleteList(this.props.list.id)
  }

  editCurrentName() {
    this.setState({ showEditInput: true})
  }

  cancelEditInput() {
    this.setState({ showEditInput: false, newName: '' })
  }

  enterNewListName() {
    if (this.state.newName.trim()) {
      this.props.renameList(this.props.list.id, this.state.newName.trim())
      this.cancelEditInput()
    }
  }

  setNewName(newName) {
    this.setState({ newName })
  }

  render() {
    return (
      <View>
        <View style={style.scrollView}>
          <Text style={style.listName}>{this.props.list.name}</Text>
          <View style={style.buttonWrapper}>
            <Button title="X" color="#f71b1b" onPress={this.deleteList} />
          </View>
          {
            this.state.showEditInput ?
            <View>
              <Button title="Cancel" color="#000" onPress={this.cancelEditInput} />
              <Button title="Enter" color="#000" onPress={this.enterNewListName} />
            </View>
            :
            <View>
              <Button title="Edit" color="#000" onPress={this.editCurrentName} />
            </View>
          }
        </View>
        {
          this.state.showEditInput &&
          <TextInput
            style={style.textInput}
            placeholder="Enter a new list name"
            onChangeText={this.setNewName}
            value={this.state.newName}
          />
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
