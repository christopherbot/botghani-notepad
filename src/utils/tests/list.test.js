import {
  createList,
  createItem,
  createNote,
} from '../list'

describe('List', () => {
  it('should create a list', () => {
    const name = 'My List'
    const color = 'blue'
    const isChecklist = true

    const list = createList({
      name,
      color,
      isChecklist,
    })

    expect(list).toHaveProperty('id', expect.any(String))
    expect(list).toHaveProperty('items', expect.any(Array))
    expect(list).toEqual(
      expect.objectContaining({
        name,
        color,
        isChecklist,
      }),
    )
  })

  it('should create a list item', () => {
    const name = 'My Item'
    const isChecked = true

    const item = createItem({
      name,
      isChecked,
    })

    expect(item).toHaveProperty('id', expect.any(String))
    expect(item).toHaveProperty('notes', expect.any(Array))
    expect(item).toEqual(
      expect.objectContaining({
        name,
        isChecked,
      }),
    )
  })

  it('should create a list item note', () => {
    const name = 'My Note'

    const note = createNote({
      name,
    })

    expect(note).toHaveProperty('id', expect.any(String))
    expect(note).toEqual(
      expect.objectContaining({
        name,
      }),
    )
  })
})
