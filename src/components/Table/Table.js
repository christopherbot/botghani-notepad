import React, { PureComponent }  from 'react'
import { View, Text } from 'react-native'

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

const Column = ({ rows }) =>
  <View>
    {
      rows.map((row, index) =>
        <View key={row.id || index}>
          <Text>
            {row.value}
          </Text>
        </View>,
      )
    }
  </View>

class Table extends PureComponent {
  render() {
    const { columns, rows, data } = this.props.list
    return (
      <View>
        {
          columns.map((column) => {
            if (column.isFirstColumn) {
              return <Column key={column.id} rows={generateFirstColumn(column, rows)} />
            }

            return <Column key={column.id} rows={generateColumn(column, rows, data)} />
          })
        }
      </View>
    )
  }
}

export default Table
