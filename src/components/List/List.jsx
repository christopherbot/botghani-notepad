import React, { PureComponent } from 'react'
import { View, ScrollView, TextInput } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { generateFirstColumn, generateColumn } from 'utils/table'
import { createRow, createColumn } from 'state/actions'
import { listPropType } from 'components/propTypeDefinitions'
import Button from 'components/Buttons/Button/Button'
import gStyle from 'styles/globalStyle'
import { Column, FirstColumn } from './Column'
import style from './List.style'
import columnStyle from './Column.style'

class List extends PureComponent {
  static propTypes = {
    list: listPropType.isRequired,
    createRow: PropTypes.func.isRequired,
    createColumn: PropTypes.func.isRequired,
  }

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
      <View style={[gStyle.fr1, style.listContainer]}>
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
        <Button onPress={this.onPress}>
          +
        </Button>
      </View>
    )
  }
}

const mapDispatchToProps = { createRow, createColumn }

export default connect(undefined, mapDispatchToProps)(List)
