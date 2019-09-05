import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableHighlight, Text } from 'react-native'
import { tabPropType } from 'components/propTypeDefinitions'

import gStyle from 'styles/globalStyle'
import style from './Tabs.style'

const Tab = props =>
  <TouchableHighlight
    onPress={props.onClick}
    style={[
      style.tabContainer,
      gStyle.fcenter,
      {
        backgroundColor: props.color,
        borderWidth: props.active ? 1 : 0,
        opacity: props.active ? 1 : 0.5,
      },
    ]}
    underlayColor={props.color}
  >
    <Text style={style.tabTitle}>
      { props.title }
    </Text>
  </TouchableHighlight>

Tab.propTypes = {
  ...tabPropType,
}

const Tabs = props =>
  <View style={{ flexDirection: 'row' }}>
    {
      props.tabs.map((tab, index) => (
        <Tab
          key={index}
          title={tab.title}
          onClick={tab.onClick}
          color={tab.color}
          active={tab.active}
        />
      ))
  }
  </View>

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape(tabPropType)).isRequired,
}

export default Tabs
