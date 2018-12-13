import { createAction } from 'redux-actions'

export const createList = createAction('CREATE_LIST', name => ({ name }))

export const createExampleList = createAction('CREATE_EXAMPLE_LIST', name => ({ name }))

export const deleteList = createAction('DELETE_LIST', listId => ({ listId }))

export const renameList = createAction('RENAME_LIST', (listId, newName) => ({ listId, newName }))

export const createRow = createAction('CREATE_ROW', (listId, rowName) => ({ listId, rowName }))

export const createColumn = createAction('CREATE_COLUMN', (listId, columnName) => ({ listId, columnName }))

export const updateCellValue = createAction(
  'UPDATE_CELL_VALUE',
  (listId, cellId, cellType, newValue) => ({ listId, cellId, cellType, newValue }),
)

export const setActiveList = createAction('SET_ACTIVE_LIST', listId => ({ listId }))
