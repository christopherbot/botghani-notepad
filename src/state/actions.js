import { createAction } from 'redux-actions'

export const createList = createAction('CREATE_LIST', name => ({ 
  name,
  createdAt: new Date().toISOString(),
}))

export const createExampleList = createAction('CREATE_EXAMPLE_LIST', name => ({ 
  name,
  createdAt: new Date().toISOString(),
}))

export const deleteList = createAction('DELETE_LIST', listId => ({ listId }))

export const renameList = createAction('RENAME_LIST', (listId, newName) => ({ 
  listId,
  newName,
  updatedAt: new Date().toISOString(),
}))

export const createRow = createAction('CREATE_ROW', (listId, rowName) => ({ 
  listId,
  rowName,
  updatedAt: new Date().toISOString(),
}))

export const createColumn = createAction('CREATE_COLUMN', (listId, columnName) => ({ 
  listId,
  columnName,
  updatedAt: new Date().toISOString(),
}))

export const updateCellValue = createAction(
  'UPDATE_CELL_VALUE',
  (listId, cellId, cellType, newValue) => ({ 
    listId,
    cellId,
    cellType,
    newValue,
    updatedAt: new Date().toISOString(),
  }),
)

export const setActiveList = createAction('SET_ACTIVE_LIST', listId => ({ listId }))

export const setIsModalOpen = createAction('SET_IS_MODAL_OPEN', isOpen => ({ isOpen }))
