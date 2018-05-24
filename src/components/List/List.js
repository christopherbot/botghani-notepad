import React, {PureComponent}  from 'react'
import { connect } from 'react-redux'
import { deleteList } from '../../state/actions'
import PropTypes from 'prop-types'
import { Text, View, Button } from 'react-native'


class List extends PureComponent {
  constructor(props) {
    super(props)

    this.deleteList = this.deleteList.bind(this)
  }

  deleteList() {
    this.props.deleteList(this.props.list.id)
  }

  render() {
    return (
      <View>
        <Text>{this.props.list.name}</Text>
        <Button title="X" onPress={this.deleteList} />
      </View>
    )
  }
}


List.propTypes = {
  list: PropTypes.object.isRequired,
  deleteList: PropTypes.func.isRequired,
}

const mapDispatchToProps = { deleteList }

export default connect(undefined, mapDispatchToProps)(List)
