import React, { PureComponent }  from 'react'
import { View, ScrollView, TouchableOpacity, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { generateFirstColumn, getCells, generateColumn } from '../../utils/table'
import { createRow, createColumn } from '../../state/actions'

import Cell from './Cell'

import columnStyle from './Column.style'
import ustyle from '../../utils/style'

class FirstColumn extends PureComponent {
  static propTypes = {
    cells: PropTypes.array,
    listId: PropTypes.string.isRequired,
    createRow: PropTypes.func.isRequired,
}

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
            <View style={[columnStyle.textInputWrapper, ustyle.w0]}>
              <TextInput
                style={columnStyle.textInput}
                placeholder="Row name..."
                autoFocus={true}
                onChangeText={this.onChangeText}
                onBlur={this.onBlur}
                value={this.state.rowName} />
            </View>
        }
        <TouchableOpacity style={[ustyle.fcenter, columnStyle.addButton]} onPress={this.onPress}>
          <Text style={columnStyle.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const Column = ({ cells, listId }) =>
  <View style={ustyle.fc}>
    { cells.map(cell => <Cell key={cell.id} listId={listId} cell={cell} />) }
  </View>

Column.propTypes = {
  cells: PropTypes.array,
  listId: PropTypes.string.isRequired,
}

class Table extends PureComponent {
  state = {
    columnName: '',
    isInputDisplayed: false,
  }

  get columnName() {
    return this.state.columnName.trim()
  }

  createColumn = () => this.props.createColumn(this.props.list.id, this.columnName)

  onChangeText = columnName => this.setState({ columnName })

  onBlur = () => {
    if (this.columnName) {
      this.createColumn()
    }

    this.setState({
      isInputDisplayed: false,
      columnName: '',
    })
  }

  onPress = () => {
    if (!this.state.isInputDisplayed) {
      this.setState({ isInputDisplayed: true })

      return
    }

    if (this.columnName) {
      this.createColumn()
      this.setState({ columnName: '' })
    }
  }

  render() {
    const { list } = this.props
    return (
      <View style={ustyle.fr1}>
        {
          list.columns.map((column) => {
            if (column.isFirstColumn) {
              return (
                <View key={column.id} style={ustyle.autoWidth}>
                  <FirstColumn
                    listId={list.id}
                    cells={generateFirstColumn(column, list.rows)}
                    createRow={this.props.createRow} />
                </View>
              )
            }

            return null
          })
        }
        <ScrollView style={[ustyle.fr, ustyle.fg0]} horizontal>
          {
            list.columns.map((column) => {
              if (column.isFirstColumn) {
                return null
              }

              return <Column key={column.id} listId={list.id} cells={generateColumn(column, list.rows, list.cells)} />
            })
          }
        </ScrollView>
        {
          this.state.isInputDisplayed &&
            <View style={columnStyle.textInputWrapper}>
              <TextInput
                style={columnStyle.textInput}
                placeholder="Column name..."
                autoFocus={true}
                onChangeText={this.onChangeText}
                onBlur={this.onBlur}
                value={this.state.columnName} />
            </View>
        }
        <TouchableOpacity style={[ustyle.fcenter, columnStyle.addButton]} onPress={this.onPress}>
          <Text style={columnStyle.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

Table.propTypes = {
  list: PropTypes.shape({
    columns: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
    cells: PropTypes.array.isRequired,
  }).isRequired,
  createRow: PropTypes.func.isRequired,
  createColumn: PropTypes.func.isRequired,
}

const mapDispatchToProps = { createRow, createColumn }

export default connect(undefined, mapDispatchToProps)(Table)
