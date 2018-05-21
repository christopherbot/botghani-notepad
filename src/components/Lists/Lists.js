import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView } from 'react-native'

import List from '../List/List'

import style from './Lists.style.js'

type Props = {};
class Lists extends Component<Props> {
  render() {
    return (
       <ScrollView style={style.scrollView}>
        { this.props.lists.map((list, i) => <List key={i} list={list} />)}
      </ScrollView> 
    )
  }
}

const mapStateToProps = ({ lists }) => ({
  lists,
})

export default connect(mapStateToProps)(Lists)
