import { createAction } from 'redux-actions'

export const createList = createAction('CREATE_LIST', name => ({ name }))

export const deleteList = createAction('DELETE_LIST', listId => ({ listId }))
