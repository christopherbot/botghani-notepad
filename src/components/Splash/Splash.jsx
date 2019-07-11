import React, { PureComponent } from 'react'
import { withNavigation } from 'react-navigation'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'

import gStyle from 'styles/globalStyle'
import style from './Splash.style'

class Splash extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  state = {
    timeout: null,
  }

  componentDidMount() {
    const timeout = setTimeout(() => {
      clearTimeout(this.state.timeout)

      this.props.navigation.navigate('App')
    }, 1250)

    this.setState({ timeout })
  }

  componentWillUnmount() {
    if (this.state.timeout) clearTimeout(this.state.timeout)
  }

  render() {
    return (
      <View style={[gStyle.f1, gStyle.fcenter, style.view]}>
        <Text style={style.text}>
          PAD.io
        </Text>
      </View>
    )
  }
}

export default withNavigation(Splash)
