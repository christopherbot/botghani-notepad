import React, { PureComponent }  from 'react'
import { connect } from 'react-redux'
import { deleteList, renameList, createRow } from '../../state/actions'
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
      newName : '',
      addRowModeOpen: false,
      rowName: '',
    }

    this.deleteList = this.deleteList.bind(this)
    this.toggleEditModeDisplay = this.toggleEditModeDisplay.bind(this)
    this.renameList = this.renameList.bind(this)
    this.onChangeNewName = this.onChangeNewName.bind(this)

    this.createRow = this.createRow.bind(this)
    this.onRowChange = this.onRowChange.bind(this)
    this.toggleAddRowDisplay = this.toggleAddRowDisplay.bind(this)
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

  onRowChange(rowName) {
    this.setState({ rowName })
  }

  createRow() {
    if (this.state.rowName.trim()) {
      this.props.createRow(this.props.list.id, this.state.rowName)
      this.toggleAddRowDisplay()
    }
  }

  toggleAddRowDisplay() {
    this.setState(prevState => ({
      addRowModeOpen: !prevState.addRowModeOpen,
      rowName: '',
    }))
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
          {
            this.state.addRowModeOpen ?
              <View>
                <Button title="cancel" color="#f71b1b" onPress={this.toggleAddRowDisplay} />
                <Button title="add" color="#32cd32" onPress={this.createRow} />
              </View>
              : <Button title="row" color="#00a9bc" onPress={this.toggleAddRowDisplay} />
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
        {
          this.state.addRowModeOpen &&
            <TextInput
              style={style.textInput}
              placeholder="ROW NAME"
              onChangeText={this.onRowChange}
              value={this.state.rowName} />
        }
      </View>
    )
  }
}


List.propTypes = {
  list: PropTypes.object.isRequired,
  deleteList: PropTypes.func.isRequired,
  renameList: PropTypes.func.isRequired,
  createRow: PropTypes.func.isRequired,
}

const mapDispatchToProps = { deleteList, renameList, createRow }

export default connect(undefined, mapDispatchToProps)(List)
