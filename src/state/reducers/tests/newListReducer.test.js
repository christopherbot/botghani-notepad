import {
  addList,
  updateList,
  deleteList,
  addListItem,
  updateListItem,
  deleteListItem,
  addListItemNote,
  updateListItemNote,
  deleteListItemNote,
  mergeLists,
} from 'state/newActions'
import listReducer from '../newListReducer'

describe('listReducer', () => {
  const note1 = {
    id: 'note1',
    name: 'Note 1',
  }
  const item1 = {
    id: 'item1',
    name: 'Item 1',
    isChecked: false,
    notes: [note1],
  }
  const list1 = {
    id: 'list1',
    name: 'List 1',
    color: '#123123',
    isChecklist: true,
    items: [item1],
  }

  const list2 = {
    id: 'list2',
    name: 'List 2',
    color: '#678678',
    isChecklist: true,
    items: [{
      id: 'item2',
      name: 'Item 2',
      notes: [{
        id: 'note2',
        name: 'Note 2',
      }],
      isChecked: false,
    }],
  }

  const list3 = {
    id: 'list3',
    name: 'List 3',
    color: '#abcabc',
    isChecklist: false,
    items: [{
      id: 'item1-2',
      name: item1.name, // purposely a duplicate
      notes: [{
        id: 'note1-1',
        name: note1.name // purposely a duplicate
      }, {
        id: 'note3',
        name: 'Note 3',
      }],
      isChecked: false,
    }, {
      id: 'item3',
      name: 'Item 3',
      notes: [{
        id: 'note4',
        name: 'Note 4',
      }],
      isChecked: false,
    }]
  }

  let state

  beforeEach(() => {
    state = [list1, list2]
  })

  it('should add a list', () => {
    const newList = {}
    const action = addList({ list: newList })

    expect(
      listReducer(state, action),
    ).toStrictEqual([
      list1,
      list2,
      newList,
    ])
  })

  it('should update a list', () => {
    const change = {
      name: 'New and Improved List 1',
    }
    const action = updateList(list1.id, change)

    expect(
      listReducer(state, action),
    ).toStrictEqual([
      {
        ...list1,
        ...change,
      },
      list2,
    ])
  })

  it('should delete a list', () => {
    const action = deleteList(list1.id)

    expect(
      listReducer(state, action),
    ).toStrictEqual([list2])
  })

  it('should add a list item', () => {
    const item = {}
    const action = addListItem(list1.id, item)

    expect(
      listReducer(state, action),
    ).toStrictEqual([
      {
        ...list1,
        items: [
          ...list1.items,
          item,
        ],
      },
      list2,
    ])
  })

  it('should update a list item', () => {
    const change = {
      isChecked: true,
    }
    const action = updateListItem(list1.id, item1.id, change)

    expect(
      listReducer(state, action),
    ).toStrictEqual([
      {
        ...list1,
        items: [{
          ...item1,
          ...change,
        }],
      },
      list2,
    ])
  })

  it('should delete a list item', () => {
    const action = deleteListItem(list1.id, item1.id)

    expect(
      listReducer(state, action),
    ).toStrictEqual([
      {
        ...list1,
        items: [],
      },
      list2,
    ])
  })

  it('should add a list item note', () => {
    const note = {}
    const action = addListItemNote(list1.id, item1.id, note)

    expect(
      listReducer(state, action),
    ).toStrictEqual([
      {
        ...list1,
        items: [{
          ...item1,
          notes: [
            ...item1.notes,
            note,
          ],
        }],
      },
      list2,
    ])
  })

  it('should update a list item note', () => {
    const change = {
      name: 'My updated note',
    }
    const action = updateListItemNote(list1.id, item1.id, note1.id, change)

    expect(
      listReducer(state, action),
    ).toStrictEqual([
      {
        ...list1,
        items: [{
          ...item1,
          notes: [{
            ...note1,
            ...change,
          }],
        }],
      },
      list2,
    ])
  })

  it('should delete a list item note', () => {
    const action = deleteListItemNote(list1.id, item1.id, note1.id)

    expect(
      listReducer(state, action),
    ).toStrictEqual([
      {
        ...list1,
        items: [{
          ...item1,
          notes: [],
        }],
      },
      list2,
    ])
  })

  it('should deep merge two lists', () => {
    state = [list1, list2, list3]
    const action = mergeLists(list3.id, list1.id, true)

    expect(
      listReducer(state, action),
    ).toStrictEqual([
      {
        ...list1,
        items: [
          {
            ...item1,
            notes: [
              note1,
              list3.items[0].notes[1],
            ],
          },
          list3.items[1],
        ]
      },
      list2,
    ])
  })

  it('should shallow merge two lists', () => {
    state = [list1, list2, list3]
    const action = mergeLists(list3.id, list1.id, false)

    expect(
      listReducer(state, action),
    ).toStrictEqual([
      {
        ...list1,
        items: [
          item1,
          ...list3.items,
        ],
      },
      list2,
    ])
  })
})
