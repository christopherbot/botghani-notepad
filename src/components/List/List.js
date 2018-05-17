import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Platform,
  Text,
  View,
  ScrollView
} from 'react-native'

import style from './List.style.js'

const templateInfo = Platform.select({
  ios: 'welcome to your template component on ios!',
  android: 'welcome to your template component on android!'
});

type Props = {};
class NewList extends Component<Props> {
  render() {
    return (
       <ScrollView style={style.scrollView}>
        { this.props.lists.map((list, i) => <Text key={i}>{list}</Text>)}
      </ScrollView> 
    )
  }
}

const mapStateToProps = ({lists}) => ({
  lists
})

export default connect(mapStateToProps)(NewList)