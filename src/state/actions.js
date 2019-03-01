import { createAction } from 'redux-actions'
import {
  createPayload,
  createPayloadWithCreatedDate,
  createPayloadWithUpdatedDate,
} from 'utils/reduxUtils'

export const createList = createAction('CREATE_LIST', createPayloadWithCreatedDate('name'))

export const createExampleList = createAction('CREATE_EXAMPLE_LIST', createPayloadWithCreatedDate('name'))

export const deleteList = createAction('DELETE_LIST', createPayload('listId'))

export const renameList = createAction('RENAME_LIST', createPayloadWithUpdatedDate('listId', 'newName'))

export const createRow = createAction('CREATE_ROW', createPayloadWithUpdatedDate('listId', 'rowName'))

export const createColumn = createAction('CREATE_COLUMN', createPayloadWithUpdatedDate('listId', 'columnName'))

export const updateCellValue = createAction(
  'UPDATE_CELL_VALUE',
  createPayloadWithUpdatedDate('listId', 'cellId', 'cellType', 'newValue'),
)

export const setActiveList = createAction('SET_ACTIVE_LIST', createPayload('listId'))

export const setIsModalOpen = createAction('SET_IS_MODAL_OPEN', createPayload('isOpen'))

export const setFavouriteList = createAction('SET_FAVOURITE_LIST', createPayloadWithUpdatedDate('listId'))
