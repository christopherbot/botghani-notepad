import React, { useEffect } from 'react'
import { withNavigation } from 'react-navigation'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import InkBottle from 'assets/inkBottle.svgx'
import PadioLogo from 'assets/padioLogo.svgx'

import gStyle from 'styles/globalStyle'
import style from './Splash.style'

const Splash = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      clearTimeout(timeout)

      navigation.navigate('App')
    }, 1250)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <View style={[gStyle.f1, gStyle.fcenter, style.view]}>
      <PadioLogo width={150} style={style.logo} />
      <InkBottle style={style.ink} />
    </View>
  )
}

Splash.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default withNavigation(Splash)
