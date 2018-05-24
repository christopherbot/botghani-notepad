import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ScrollView } from 'react-native'

import List from '../List/List'

import style from './Lists.style.js'

class Lists extends PureComponent {
  render() {
    return (
       <ScrollView style={style.scrollView}>
        { this.props.lists.map(list => <List key={list.id} list={list} />)}
      </ScrollView>
    )
  }
}

Lists.propTypes = {
  lists: PropTypes.array.isRequired,
}

const mapStateToProps = ({ lists }) => ({
  lists,
})

export default connect(mapStateToProps)(Lists)
