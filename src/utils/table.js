export const generateFirstColumn = (column, rows) => [column, ...rows]

export const getCells = (cells, rowId, columnId) =>
  cells.find(cell => cell.rowId === rowId && cell.columnId === columnId)

export const generateColumn = (column, rows, cells) =>
  [column, ...rows.map(row => getCells(cells, row.id, column.id))]
