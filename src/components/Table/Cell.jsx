import React, { PureComponent, Fragment }  from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateCellValue, setIsCellOptionsOpen } from 'state/actions'

import gStyle from 'styles/globalStyle'
import style from './Cell.style'

class Cell extends PureComponent {
  static propTypes = {
    cell: PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string,
    })
  }

  state = {
    isBeingEdited: false,
    newCellValue: this.props.cell.value,
  }

  onPressCell = () => {
    this.setState({ isBeingEdited: true })
  }

  onLongPressCell = () => {
    this.props.setIsCellOptionsOpen(true)
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
              <TouchableOpacity 
                style={[gStyle.fcenter, style.cell]} 
                onPress={this.onPressCell}
                onLongPress={this.onLongPressCell}
                delayLongPress={500}
              >
                <Text style={this.cellTextStyle} numberOfLines={1}>
                  {this.props.cell.value}
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
  setIsCellOptionsOpen,
}

export default connect(undefined, mapDispatchToProps)(Cell)
