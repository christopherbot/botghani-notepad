import React from 'react'
import { 
  View,
  Text,
  Modal as RNModal, 
  TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'

import style from './Modal.style'
import gStyle from '../../styles/globalStyle'

export default Modal = ({ closeModal, deleteList }) =>
  <View style={gStyle.fc1}>
    <RNModal animationType="slide">
      <View style={[gStyle.fc1, gStyle.fcenter, style.innerModalContainer]}>
        <Text style={style.questionText}>Are you sure you want to delete this list?</Text>
        <View style={style.buttonContainer}>

          <TouchableOpacity onPress={closeModal}>
            <Text>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={deleteList}>
            <Text>Yes</Text>
          </TouchableOpacity>

        </View>
      </View>
    </RNModal>
  </View>

Modal.propTypes = {
  deleteList: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
}
