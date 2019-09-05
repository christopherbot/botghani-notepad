import React, { PureComponent } from 'react'
import { View, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { cellPropType, headerCellPropType } from 'components/propTypeDefinitions'
import AddButton from 'components/Buttons/AddButton/AddButton'
import gStyle from 'styles/globalStyle'
import Cell from './Cell'
import columnStyle from './Column.style'

export class FirstColumn extends PureComponent {
  static propTypes = {
    cells: PropTypes.arrayOf(headerCellPropType),
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
      <View style={gStyle.fc}>
        {
          this.props.cells.map(cell =>
            <Cell
              key={cell.id}
              listId={this.props.listId}
              cell={cell}
            />,
          )
        }
        {
          this.state.isInputDisplayed &&
            <View style={[columnStyle.textInputWrapper, gStyle.w0]}>
              <TextInput
                style={columnStyle.textInput}
                placeholder="Row name..."
                autoFocus={true}
                onChangeText={this.onChangeText}
                onBlur={this.onBlur}
                value={this.state.rowName}
              />
            </View>
        }
        <AddButton onPress={this.onPress} />
      </View>
    )
  }
}

export const Column = ({ cells, listId }) =>
  <View style={gStyle.fc}>
    {
      cells.map(cell =>
        <Cell
          key={cell.id}
          listId={listId}
          cell={cell}
        />,
      )
    }
  </View>

Column.propTypes = {
  cells: PropTypes.arrayOf(
    PropTypes.oneOfType([
      cellPropType,
      headerCellPropType,
    ]),
  ),
  listId: PropTypes.string.isRequired,
}
