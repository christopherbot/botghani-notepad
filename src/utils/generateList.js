import uuidv4 from 'uuid/v4'

const generateList = (name) => ({
  id: uuidv4(),
  name,
  rows: [],
  columns: [{
    id: uuidv4(),
    isFirstColumn: true,
    value: name,
    isHeader: true,
  }],
  cells: [],
  isBeingEdited: false,
})

export default generateList
