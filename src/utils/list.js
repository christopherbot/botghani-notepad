import uuidv4 from 'uuid/v4'
import PropTypes from 'prop-types'

const createNote = ({ name }) => ({
  id: uuidv4(),
  name,
})

const notePropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
})


const createItem = ({ name, isChecked }) => ({
  id: uuidv4(),
  name,
  isChecked,
  notes: [],
})

const itemPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  notes: PropTypes.arrayOf(notePropType).isRequired,
})


const createList = ({ name, isChecklist, color }) => ({
  id: uuidv4(),
  name,
  color,
  isChecklist,
  items: [],
})

const listPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  isChecklist: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(itemPropType).isRequired,
})

export {
  createNote,
  notePropType,
  createItem,
  itemPropType,
  createList,
  listPropType,
}
