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
import generateRow from '../../utils/generateRow'
import generateColumn from '../../utils/generateColumn'

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
        const newRow = generateRow(payload.rowName)
        const newCells = list.columns.reduce((cells, column) => {
          if (!column.isFirstColumn) {
            cells.push({
              id: uuidv4(),
              rowId: newRow.id,
              columnId: column.id,
              /*
               * Temporary value to visualize which action
               * was responsible for creating this cell:
               */
              value: 'cellR',
            })
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
        const newColumn = generateColumn(payload.columnName)
        const newCells = list.rows.map((row) => ({
          id: uuidv4(),
          rowId: row.id,
          columnId: newColumn.id,
          /*
           * Temporary value to visualize which action
           * was responsible for creating this cell:
           */
          value: 'cellC',
        }))

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
    return state.map((list) => {
      if (list.id === payload.listId) {
        const updatedCells = list.cells.map((cell) => {
          if (cell.id === payload.cellId) {
            return {
              ...cell,
              value: payload.newValue,
            }
          }

          return cell
        })

        return {
          ...list,
          cells: updatedCells,
        }
      }

      return list
    })
  },
}, defaultState)
