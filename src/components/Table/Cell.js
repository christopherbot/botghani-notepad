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

  cancelEditMode = () => {
    this.setState({
      isBeingEdited: false,
      newCellValue: this.props.cell.value,
    })
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
              <Fragment>
                <TextInput
                  onChangeText={this.changeCellValue}
                  value={this.state.newCellValue} />
                <TouchableOpacity onPress={this.updateCellValue}>
                  <Text>
                    Ok
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.cancelEditMode}>
                  <Text>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </Fragment>
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
