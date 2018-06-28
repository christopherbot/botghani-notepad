import React  from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { generateFirstColumn, getCells, generateColumn } from '../../utils/table'

import Cell from './Cell'

import ustyle from '../../utils/style'

const Column = ({ cells, listId }) =>
  <View style={ustyle.fc1}>
    { cells.map(cell => <Cell key={cell.id} listId={listId} cell={cell} />) }
  </View>

Column.propTypes = {
  cells: PropTypes.array,
}

const Table = ({ list }) =>
  <View style={ustyle.fr1}>
    {
      list.columns.map((column) => {
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
