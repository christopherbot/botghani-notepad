import React, { PureComponent }  from 'react'
import { View, ScrollView, TextInput } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { generateFirstColumn, getCells, generateColumn } from 'utils/table'
import { createRow, createColumn } from 'state/actions'

import AddButton from 'components/Buttons/AddButton/AddButton'
import Cell from 'components/Table/Cell'
import { Column, FirstColumn } from './Column'

import gStyle from 'styles/globalStyle'
import columnStyle from './Column.style'

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
      <View style={gStyle.fr1}>
        {
          list.columns.map((column) => {
            if (column.isFirstColumn) {
              return (
                <View key={column.id} style={gStyle.autoWidth}>
                  <FirstColumn
                    listId={list.id}
                    cells={generateFirstColumn(column, list.rows)}
                    createRow={this.props.createRow}
                  />
                </View>
              )
            }

            return null
          })
        }
        <ScrollView style={[gStyle.fr, gStyle.fg0]} horizontal>
          {
            list.columns.map((column) => {
              if (column.isFirstColumn) {
                return null
              }

              return (
                <Column
                  key={column.id}
                  listId={list.id}
                  cells={generateColumn(column, list.rows, list.cells)}
                />
              )
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
                value={this.state.columnName}
              />
            </View>
        }
        <AddButton onPress={this.onPress} />
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
