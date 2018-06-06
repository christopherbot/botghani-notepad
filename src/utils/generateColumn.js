import uuidv4 from 'uuid/v4'

const generateColumn = (name) => ({
  id: uuidv4(),
  value: name,
})

export default generateColumn
