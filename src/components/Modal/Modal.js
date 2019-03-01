import React from 'react'
import { 
  View,
  Text,
  Modal as ReactNativeModal,
  TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'

import gStyle from 'styles/globalStyle'
import style from './Modal.style'

export default Modal = ({ closeModal, deleteList }) =>
  <View style={gStyle.fc1}>
    <ReactNativeModal animationType="slide" onRequestClose={closeModal}>
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
    </ReactNativeModal>
  </View>

Modal.propTypes = {
  deleteList: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
}
