import React, { PureComponent }  from 'react'
import { View, ScrollView, TouchableOpacity, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { generateFirstColumn, getCells, generateColumn } from '../../utils/table'
import { createRow } from '../../state/actions'

import Cell from './Cell'

import columnStyle from './Column.style'

import ustyle from '../../utils/style'

class _FirstColumn extends PureComponent {
  state = {
    rowName: '',
    isInputDisplayed: false,
  }

  get rowName() {
    return this.state.rowName.trim()
  }

  createRow = () => this.props.createRow(this.props.listId, this.rowName)

  onChangeText = rowName => this.setState({ rowName })

  onBlur = () => {
    if (this.rowName) {
      this.createRow()
    }

    this.setState({
      isInputDisplayed: false,
      rowName: '',
    })
  }

  onPress = () => {
    if (!this.state.isInputDisplayed) {
      this.setState({ isInputDisplayed: true })

      return
    }

    if (this.rowName) {
      this.createRow()
      this.setState({ rowName: '' })
    }
  }

  render() {
    return (
      <View style={ustyle.fc}>
        { this.props.cells.map(cell => <Cell key={cell.id} listId={this.props.listId} cell={cell} />) }
        {
          this.state.isInputDisplayed &&
            <TextInput
              style={columnStyle.textInput}
              placeholder="Row name..."
              autoFocus={true}
              onChangeText={this.onChangeText}
              onBlur={this.onBlur}
              value={this.state.rowName} />
        }
        <TouchableOpacity style={[ustyle.fcenter, columnStyle.addButton]} onPress={this.onPress}>
          <Text style={columnStyle.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapDispatchToProps = { createRow }

const FirstColumn = connect(undefined, mapDispatchToProps)(_FirstColumn)

const Column = ({ cells, listId }) =>
  <View style={ustyle.fc}>
    { cells.map(cell => <Cell key={cell.id} listId={listId} cell={cell} />) }
  </View>

Column.propTypes = {
  cells: PropTypes.array,
}

const Table = ({ list }) =>
  <View style={ustyle.fr1}>
    {
      list.columns.map((column) => {
        if (column.isFirstColumn) {
          return (
            <View key={column.id} style={ustyle.autoWidth}>
              <FirstColumn listId={list.id} cells={generateFirstColumn(column, list.rows)} />
            </View>
          )
        }

        return null
      })
    }
    <ScrollView style={ustyle.fr1} horizontal>
      {
        list.columns.map((column) => {
          if (column.isFirstColumn) {
            return null
          }

          return <Column key={column.id} listId={list.id} cells={generateColumn(column, list.rows, list.cells)} />
        })
      }
    </ScrollView>
  </View>

Table.propTypes = {
  list: PropTypes.shape({
    columns: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
    cells: PropTypes.array.isRequired,
  }).isRequired,
}

export default Table
