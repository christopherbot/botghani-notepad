import uuidv4 from 'uuid/v4'
import { generateHeaderCell } from 'utils/cellGenerators'

const generateList = (name, isChecklist, color, createdAt) => ({
  id: uuidv4(),
  name,
  rows: [],
  columns: [{
    ...generateHeaderCell(name, 'column'),
    isFirstColumn: true,
  }],
  cells: [],
  isChecklist,
  color,
  createdAt,
  updatedAt: createdAt,
})

export default generateList
