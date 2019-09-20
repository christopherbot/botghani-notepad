import React from 'react'
import { withNavigation } from 'react-navigation'
import { View, Animated, Easing } from 'react-native'
import PropTypes from 'prop-types'

import InkBottle from 'assets/inkBottle.svgx'
import PadioLogo from 'assets/padioLogo.svgx'
import CheekyPaper from 'assets/cheekyPaper.svgx'

import gStyle from 'styles/globalStyle'
import style from './Splash.style'

const Splash = ({ navigation }) => {
  const transformValue = new Animated.Value(0)

  const interpolatedValue = transformValue.interpolate({
    inputRange: [0, 1],
    outputRange: [120, 18],
  })

  const animationStyle = {
    transform: [{
      translateY: interpolatedValue,
    }, {
      translateX: interpolatedValue,
    }, {
      rotate: '-45deg',
    }, {
      scale: 1.5,
    }],
  }

  Animated.sequence([
    Animated.delay(500),
    Animated.timing(transformValue, {
      toValue: 1,
      duration: 750,
      useNativeDriver: true,
      easing: Easing.bezier(0, 0, 0.58, 1),
    }),
    Animated.delay(400),
  ]).start(() => navigation.navigate('App'))

  return (
    <View style={[gStyle.f1, gStyle.fcenter, style.view]}>
      <PadioLogo width={150} style={style.logo} />
      <InkBottle style={style.ink} />
      <Animated.View style={[style.paper, animationStyle]}>
        <CheekyPaper />
      </Animated.View>
    </View>
  )
}

Splash.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default withNavigation(Splash)
