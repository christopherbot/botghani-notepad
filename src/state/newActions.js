import { createAction } from 'redux-actions'
import { createPayload } from 'utils/reduxUtils'

const addList = createAction(
  'ADD_LIST',
  createPayload('list'),
)

const updateList = createAction(
  'UPDATE_LIST',
  createPayload('listId', 'change'),
)

const deleteList = createAction(
  'DELETE_LIST',
  createPayload('listId'),
)

const addListItem = createAction(
  'ADD_LIST_ITEM',
  createPayload('listId', 'item'),
)

const updateListItem = createAction(
  'UPDATE_LIST_ITEM',
  createPayload('listId', 'itemId', 'change'),
)

const deleteListItem = createAction(
  'DELETE_LIST_ITEM',
  createPayload('listId', 'itemId'),
)

const addListItemNote = createAction(
  'ADD_LIST_NOTE',
  createPayload('listId', 'itemId', 'note'),
)

const updateListItemNote = createAction(
  'UPDATE_LIST_NOTE',
  createPayload('listId', 'itemId', 'noteId', 'change'),
)

const deleteListItemNote = createAction(
  'DELETE_LIST_NOTE',
  createPayload('listId', 'itemId', 'noteId'),
)

const setActiveList = createAction(
  'SET_ACTIVE_LIST',
  createPayload('listId'),
)

const setFavouriteList = createAction(
  'SET_FAVOURITE_LIST',
  createPayload('listId'),
)

const setIsModalOpen = createAction(
  'SET_IS_MODAL_OPEN',
  createPayload('isOpen'),
)

export {
  addList,
  updateList,
  deleteList,
  addListItem,
  updateListItem,
  deleteListItem,
  addListItemNote,
  updateListItemNote,
  deleteListItemNote,
  setActiveList,
  setFavouriteList,
  setIsModalOpen,
}
