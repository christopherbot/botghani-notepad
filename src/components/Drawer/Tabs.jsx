import React from 'react'
import { View, TouchableHighlight, Text } from 'react-native'

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
    <Text style={style.tabTitle}>{props.title}</Text>
  </TouchableHighlight>

const Tabs = props =>
  <View style={{ flexDirection: 'row' }}> 
    {
      props.tabData.map((tab, index) => (
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

export default Tabs
