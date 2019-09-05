import PropTypes from 'prop-types'

const {
  string,
  array,
  bool,
  shape,
  oneOf,
} = PropTypes

export const listPropType = shape({
  id: string.isRequired,
  name: string.isRequired,
  columns: array.isRequired,
  rows: array.isRequired,
  cells: array.isRequired,
  createdAt: string.isRequired,
  updatedAt: string.isRequired,
})

const baseCellPropType = {
  id: string.isRequired,
  value: string.isRequired,
}

export const cellPropType = shape({
  ...baseCellPropType,
  type: oneOf(['cell']),
  rowId: string.isRequired,
  columnId: string.isRequired,
})

export const headerCellPropType = shape({
  ...baseCellPropType,
  type: oneOf(['row', 'column']),
  isHeader: bool.isRequired,
  isFirstColumn: bool,
})

export const tabPropType = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}
