import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ScrollView } from 'react-native'

import List from '../List/List'

import ustyle from '../../utils/style'

class Lists extends PureComponent {
  render() {
    return (
       <ScrollView style={ustyle.f1}>
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
