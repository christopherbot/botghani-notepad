import React, { Component } from 'react'
import { Button, View, TextInput} from 'react-native'
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
    newName : '',
    addRowModeOpen: false,
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
      newName: '',
    }))
  }

  renameList = () => {
    if (this.state.newName.trim()) {
      this.props.renameList(this.props.list.id, this.state.newName.trim())
      this.toggleEditModeDisplay()
    }
  }

  onChangeNewName = (newName) => {
    this.setState({ newName })
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
      <View style={[style.view, ustyle.fr1]}>
        <Button title="X" color="#f71b1b" onPress={this.deleteList} />
        <Button
          title={this.state.isEditModeDisplayed ? 'Cancel' : 'Edit'}
          onPress={this.toggleEditModeDisplay}
          color="#000"
        />
        {
          this.state.isEditModeDisplayed &&
            <View>
              <Button title="Rename" color="#000" onPress={this.renameList} />
            </View>
        }
        {
        this.state.addRowModeOpen ?
          <View>
            <Button title="cancel" color="#f71b1b" onPress={this.toggleAddRowDisplay} />
            <Button title="add" color="#32cd32" onPress={this.createRow} />
          </View>
          : <Button title="row+" color="#00a9bc" onPress={this.toggleAddRowDisplay} />
        }
        {
        this.state.addColumnModeOpen ?
          <View>
            <Button title="cancel" color="#f71b1b" onPress={this.toggleColumnDisplay} />
            <Button title="add" color="#32cd32" onPress={this.createColumn} />
          </View>
          : <Button title="col+" color="#00a9bc" onPress={this.toggleColumnDisplay} />
        }
        {
        this.state.isEditModeDisplayed &&
          <TextInput
            style={style.textInput}
            placeholder="Enter a new list name"
            onChangeText={this.onChangeNewName}
            value={this.state.newName} />
        }
        {
        this.state.addRowModeOpen &&
          <TextInput
            style={style.textInput}
            placeholder="ROW NAME"
            onChangeText={this.onRowChange}
            value={this.state.rowName} />
        }
        {
        this.state.addColumnModeOpen &&
          <TextInput
            style={style.textInput}
            placeholder="COLUMN NAME"
            onChangeText={this.onColumnChange}
            value={this.state.columnName} />
        }
      </View>
    )
  }
}

const mapDispatchToProps = { deleteList, renameList, createRow, createColumn }

export default connect(undefined, mapDispatchToProps)(ButtonMenu)
