import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateCellValue } from 'state/actions'
import { cellPropType, headerCellPropType } from 'components/propTypeDefinitions'

import gStyle from 'styles/globalStyle'
import style from './Cell.style'

class Cell extends PureComponent {
  static propTypes = {
    cell: PropTypes.oneOfType([
      cellPropType,
      headerCellPropType,
    ]).isRequired,
    updateCellValue: PropTypes.func.isRequired,
    listId: PropTypes.string.isRequired,
  }

  state = {
    isBeingEdited: false,
    newCellValue: this.props.cell.value,
  }

  componentDidUpdate({ cell }) {
    if (cell.value !== this.props.cell.value && this.props.cell.value !== this.state.newCellValue) {
      this.setState({ newCellValue: this.props.cell.value })
    }
  }

  onPressCell = () => {
    this.setState({ isBeingEdited: true })
  }

  changeCellValue = (newCellValue) => {
    this.setState({ newCellValue })
  }

  updateCellValue = () => {
    this.setState({ isBeingEdited: false })
    if (this.state.newCellValue !== this.props.cell.value) {
      this.props.updateCellValue(this.props.listId, this.props.cell.id, this.props.cell.type, this.state.newCellValue)
    }
  }

  get cellTextStyle() {
    return this.props.cell.isHeader && this.props.cell.type === 'column' && style.headerCellText
  }

  render() {
    return (
      <View style={style.cellWrapper}>
        {
          this.state.isBeingEdited
            ? (
              <TextInput
                style={style.textInput}
                value={this.state.newCellValue}
                onChangeText={this.changeCellValue}
                onBlur={this.updateCellValue}
                autoFocus={true}
              />
            )
            : (
              <TouchableOpacity style={[gStyle.fcenter, style.cell]} onPress={this.onPressCell}>
                <Text style={this.cellTextStyle} numberOfLines={1}>
                  { this.props.cell.value }
                </Text>
              </TouchableOpacity>
            )
        }
      </View>
    )
  }
}

const mapDispatchToProps = {
  updateCellValue,
}

export default connect(undefined, mapDispatchToProps)(Cell)
