import React, { PureComponent }  from 'react'
import { View, PanResponder, Animated } from 'react-native'
import PropTypes from 'prop-types'
import { generateFirstColumn, getCells, generateColumn } from '../../utils/table'
import { moveFirstColumnToHead } from '../../utils/arrayUtils'

import Cell from './Cell'

import ustyle from '../../utils/style'

class Column extends PureComponent {
  state = {
    pan: new Animated.ValueXY()
  }

  panResponder = PanResponder.create({
    // Ask to be the responder:
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

    onPanResponderGrant: (evt, gestureState) => {
      console.log('onPanResponderGrant', gestureState)
      // The gesture has started. Show visual feedback so the user knows
      // what is happening!

      // gestureState.d{x,y} will be set to zero now
    },
    // onPanResponderMove: (evt, gestureState) => {
    //   console.log('onPanResponderMove', gestureState)
    //   // The most recent move distance is gestureState.move{X,Y}

    //   // The accumulated gesture distance since becoming responder is
    //   // gestureState.d{x,y}
    // },
    onPanResponderMove: Animated.event([
      null, {dx: this.state.pan.x, dy: this.state.pan.y},
    ]),
    onPanResponderTerminationRequest: (evt, gestureState) => true,
    onPanResponderRelease: (evt, gestureState) => {
      console.log('onPanResponderRelease', gestureState)
      Animated.spring(
        this.state.pan,
        {toValue:{x:0,y:0}}
      ).start();
      // The user has released all touches while this view is the
      // responder. This typically means a gesture has succeeded
    },
    onPanResponderTerminate: (evt, gestureState) => {
      console.log('onPanResponderTerminate', gestureState)
      // Another component has become the responder, so this gesture
      // should be cancelled
    },
    onShouldBlockNativeResponder: (evt, gestureState) => {
      console.log('onShouldBlockNativeResponder', gestureState)
      // Returns whether this component should block native components from becoming the JS
      // responder. Returns true by default. Is currently only supported on android.
      return true;
    },
  })

  render() {
    const { pan } = this.state
    const [translateX, translateY] = [pan.x, pan.y]
    const animatedStyle = {transform: [{translateX}, {translateY}]}
    return (
      <Animated.View style={[ustyle.fc1, animatedStyle]} {...this.panResponder.panHandlers}>
        { this.props.cells.map(cell => <Cell key={cell.id} listId={this.props.listId} cell={cell} />) }
      </Animated.View>
    )
  }
}

Column.propTypes = {
  cells: PropTypes.array,
}

const Table = ({ list }) =>
  <View style={ustyle.fr1}>
    {
      moveFirstColumnToHead(list.columns).map((column) => {
        if (column.isFirstColumn) {
          return <Column key={column.id} listId={list.id} cells={generateFirstColumn(column, list.rows)} />
        }

        return <Column key={column.id} listId={list.id} cells={generateColumn(column, list.rows, list.cells)} />
      })
    }
  </View>

Table.propTypes = {
  list: PropTypes.shape({
    columns: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
    cells: PropTypes.array.isRequired,
  }).isRequired,
}

export default Table
