import uuidv4 from 'uuid/v4'

const generateList = (name) => ({
  id: uuidv4(),
  rows: [],
  columns: [{
    id: uuidv4(),
    isFirstColumn: true,
    value: name,
  }],
  data: [],
  isBeingEdited: false,
})

export default generateList
