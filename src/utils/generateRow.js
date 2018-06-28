import uuidv4 from 'uuid/v4'

const generateRow = (name) => ({
  id: uuidv4(),
  value: name,
  isHeader: true,
})

export default generateRow
