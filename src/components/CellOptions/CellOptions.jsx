import React, { PureComponent } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'

import style from './CellOptions.style'

export default class CellOptions extends PureComponent {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,  

    closeModal: PropTypes.func.isRequired,
  }

  render() {
    return (
      this.props.isOpen ? (
        <View style={[style.view, { display: this.props.isOpen ? 'flex' : 'none' }]}>
          <TouchableOpacity style={style.closeButton} onPress={this.props.closeModal}>
            <Text style={style.buttonText}>X</Text>
          </TouchableOpacity>
          <Text style={style.text}>Clear</Text>
          <Text style={style.text}>Delete Row</Text>
          <Text style={style.text}>Delete Cell</Text>
        </View>
      ) : null
    )
  }
}
