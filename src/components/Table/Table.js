import React, { PureComponent }  from 'react'
import { View, Text } from 'react-native'

import ustyle from '../../utils/style'

const generateFirstColumn = (column, rows) => [column, ...rows]

const getData = (data, rowId, columnId) => {
  const datum = data.find(cell => cell.rowId === rowId && cell.columnId === columnId)
  return datum || 'undefined'
}

const generateColumn = (column, rows, data) => {
  return [
    column,
    ...rows.map(row => getData(data, row.id, column.id)),
  ]
}

const Column = ({ cells }) =>
  <View style={ustyle.fc1}>
    {
      cells.map((cell, index) =>
        <View key={cell.id || index}>
          <Text>
            {cell.value}
          </Text>
        </View>,
      )
    }
  </View>

class Table extends PureComponent {
  render() {
    const { columns, rows, data } = this.props.list
    return (
      <View style={ustyle.fr1}>
        {
          columns.map((column) => {
            if (column.isFirstColumn) {
              return <Column key={column.id} cells={generateFirstColumn(column, rows)} />
            }

            return <Column key={column.id} cells={generateColumn(column, rows, data)} />
          })
        }
      </View>
    )
  }
}

export default Table
