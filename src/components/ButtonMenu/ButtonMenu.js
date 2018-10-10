import React, { Component } from 'react'
import {Button, View, TextInput, Text} from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { deleteList, renameList, createRow, createColumn } from '../../state/actions'

import style from './ButtonMenu.style.js'
import ustyle from '../../utils/style'

class ButtonMenu extends Component {
  static propTypes = {
    list: PropTypes.object.isRequired,
    deleteList: PropTypes.func.isRequired,
    renameList: PropTypes.func.isRequired,
    createRow: PropTypes.func.isRequired,
    createColumn: PropTypes.func.isRequired,
  }

  state = {
    isEditModeDisplayed: false,
    listName : this.props.list.name,
    rowName: '',
    addColumnModeOpen: false,
    columnName: '',
  }

  deleteList = () => {
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

  onChangeNewName = (listName) => {
    this.setState({ listName: listName })
  }

  createRow = () => {
    if (this.state.rowName.trim()) {
      this.props.createRow(this.props.list.id, this.state.rowName)
      this.toggleAddRowDisplay()
    }
  }

  onRowChange = (rowName) =>  {
    this.setState({ rowName })
  }

  toggleAddRowDisplay = () => {
    this.setState(prevState => ({
      addRowModeOpen: !prevState.addRowModeOpen,
      rowName: '',
    }))
  }

  createColumn = () => {
    if (this.state.columnName.trim()) {
      this.props.createColumn(this.props.list.id, this.state.columnName)
      this.toggleColumnDisplay()
    }
  }

  onColumnChange = (columnName) => {
    this.setState({columnName})
  }

  toggleColumnDisplay = () => {
    this.setState(prevState => ({
      addColumnModeOpen: !prevState.addColumnModeOpen,
      columnName: '',
    }))
  }

  render() {
    return (
      <View style={ustyle.fc1}>
        <View style={[ustyle.fr1, ustyle.fcenter, style.buttonContainer]}>
          //todo create modal to confirm deletion of list #60 -Dave 10.18
          <Button title="X" color="#f71b1b" onPress={this.deleteList} />
          {
            this.state.isEditModeDisplayed
                ? <TextInput
                    onBlur={this.renameList}
                    onChangeText={this.onChangeNewName}
                    value={this.state.listName}
                    autoFocus={true}
                  />
                : (
                    <Text style={style.mainTitle} onPress={this.toggleEditModeDisplay}>
                      { this.state.listName }
                    </Text>
                )
          }

          {
            this.state.addRowModeOpen
              ? (
                <View>
                  <Button title="cancel" color="#f71b1b" onPress={this.toggleAddRowDisplay} />
                  <Button title="add" color="#32cd32" onPress={this.createRow} />
                </View>
              )
              : <Button title="ROW+" color="#00a9bc" onPress={this.toggleAddRowDisplay} />
          }
          {
            this.state.addColumnModeOpen
              ? (
                <View>
                  <Button title="cancel" color="#f71b1b" onPress={this.toggleColumnDisplay} />
                  <Button title="add" color="#32cd32" onPress={this.createColumn} />
                </View>
              )
              : <Button title="COL+" color="#00a9bc" onPress={this.toggleColumnDisplay} />
          }
        </View>
        <View style={ustyle.fc1}>
          {
            this.state.addRowModeOpen &&
              <TextInput
                style={style.textInputField}
                placeholder="ROW NAME"
                autoFocus={true}
                onChangeText={this.onRowChange}
                value={this.state.rowName} />
          }
          {
            this.state.addColumnModeOpen &&
              <TextInput
                style={style.textInputField}
                placeholder="COLUMN NAME"
                autoFocus={true}
                onChangeText={this.onColumnChange}
                value={this.state.columnName} />
        }
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = { deleteList, renameList, createRow, createColumn }

export default connect(undefined, mapDispatchToProps)(ButtonMenu)
