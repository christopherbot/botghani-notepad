import React, { PureComponent, Fragment }  from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateCellValue } from '../../state/actions'

import style from './Table.style'

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

  changeCellValue = (newCellValue) => {
    this.setState({ newCellValue })
  }

  updateCellValue = () => {
    this.props.updateCellValue(this.props.listId, this.props.cell.id, this.state.newCellValue)
    this.setState({ isBeingEdited: false })
  }

  get cellStyle() {
    return this.props.cell.isHeader ? style.headerCell : style.dataCell
  }


  render() {
    return (
      <View style={style.cell}>
        {
          this.state.isBeingEdited
            ? (
              <TextInput
                value={this.state.newCellValue}
                onChangeText={this.changeCellValue}
                onBlur={this.updateCellValue}
                autoFocus={true} />
            )
            : (
              <TouchableOpacity style={this.cellStyle} onPress={this.onPressCell}>
                <Text numberOfLines={1}>
                  {this.props.cell.value}
                </Text>
              </TouchableOpacity>
            )
        }
      </View>
    )
  }
}

const mapDispatchToProps = { updateCellValue }

export default connect(undefined, mapDispatchToProps)(Cell)
