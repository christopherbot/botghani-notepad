import uuidv4 from 'uuid/v4'

export const generateHeaderCell = (name, type) => ({
  id: uuidv4(),
  type,
  value: name,
  isHeader: true,
})

export const generateCell = (rowId, columnId, value) => ({
  id: uuidv4(),
  type: 'cell',
  rowId,
  columnId,
  /*
   * Temporary value to visualize which action
   * was responsible for creating this cell:
   */
  value,
})
