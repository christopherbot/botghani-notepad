import uuidv4 from 'uuid/v4'
import { generateHeaderCell } from './cellGenerators'

const generateList = (name) => ({
  id: uuidv4(),
  name,
  rows: [],
  columns: [{
    ...generateHeaderCell(name, 'column'),
    isFirstColumn: true,
  }],
  cells: [],
})

export default generateList
