import uuidv4 from 'uuid/v4'

const generateList = (name) => ({
  id: uuidv4(),
  rows: [],
  columns: [{
    id: uuidv4(),
    isFirstColumn: true,
    value: name,
  }],
  cells: [],
  isBeingEdited: false,
})

export default generateList