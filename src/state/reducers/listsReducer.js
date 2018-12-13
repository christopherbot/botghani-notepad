import { handleActions } from 'redux-actions'
import uuidv4 from 'uuid/v4'
import {
  createList,
  createExampleList,
  deleteList,
  renameList,
  createRow,
  createColumn,
  updateCellValue,
} from '../actions'
import generateList from '../../utils/generateList'
import generateExampleList from '../../utils/generateExampleList'
import { generateHeaderCell, generateCell } from '../../utils/cellGenerators'

// A mapping of cell types to the keys in a list object
const cellTypeMap = {
  cell: 'cells',
  row: 'rows',
  column: 'columns',
}

const defaultState = []

export default handleActions({
  [createList](state, { payload }) {
    return [...state, generateList(payload.name)]
  },

  [createExampleList](state, { payload }) {
    return [...state, generateExampleList()]
  },

  [deleteList](state, { payload }) {
    return state.filter(list => list.id !== payload.listId)
  },

  [renameList](state, { payload }) {
    return state.map((list) => {
      if (list.id === payload.listId) {
        return {
          ...list,
          name: payload.newName,
          columns: list.columns.map((column) => {
            if (column.isFirstColumn) {
              return {
                ...column,
                value: payload.newName,
              }
            }

            return column
          })
        }
      }

      return list
    })
  },

  [createRow](state, { payload }) {
    return state.map((list) => {
      if (list.id === payload.listId) {
        const newRow = generateHeaderCell(payload.rowName, 'row')
        const newCells = list.columns.reduce((cells, column) => {
          if (!column.isFirstColumn) {
            cells.push(generateCell(newRow.id, column.id, 'cellR'))
          }

          return cells
        }, [])

        return {
          ...list,
          rows: [...list.rows, newRow],
          cells: [...list.cells, ...newCells]
        }
      }

      return list
    })
  },

  [createColumn](state, { payload }) {
    return state.map((list) => {
      if (list.id === payload.listId) {
        const newColumn = generateHeaderCell(payload.columnName, 'column')
        const newCells = list.rows.map(row => generateCell(row.id, newColumn.id, 'cellC'))

        return {
          ...list,
          columns: [...list.columns, newColumn],
          cells: [...list.cells, ...newCells]
        }
      }

      return list
    })
  },

  [updateCellValue](state, { payload }) {
    const { listId, cellId, cellType, newValue } = payload

    return state.map((list) => {
      const listDataType = cellTypeMap[cellType]
      const data = list[listDataType]

      let changeListName = false

      if (list.id === listId) {
        const updatedData = data.map((datum) => {
          if (datum.id === cellId) {
            // Ensure that the list name property gets
            // updated if the cell is the first column.
            changeListName = datum.isFirstColumn

            return {
              ...datum,
              value: newValue,
            }
          }

          return datum
        })

        return {
          ...list,
          [listDataType]: updatedData,
          name: changeListName ? newValue : list.name,
        }
      }

      return list
    })
  },
}, defaultState)
