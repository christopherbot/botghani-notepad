import uuidv4 from 'uuid/v4'

const generateList = (name) => ({
  id: uuidv4(),
  name,
  rows: [],
  columns: [],
  isBeingEdited: false,
})

export default generateList
