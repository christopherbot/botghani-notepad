import uuidv4 from 'uuid/v4'

const generateList = () => ({
  id: uuidv4(),
  rows: [{
    id: 'row1',
    value: 'chris',
  }, {
    id: 'row2',
    value: 'dave',
  }],
  columns: [{
    id: uuidv4(),
    isFirstColumn: true,
    value: 'people',
  }, {
    id: 'col1',
    value: 'last name',
  }, {
    id: 'col2',
    value: 'hair color',
  }, {
    id: 'col3',
    value: 'is cool',
  }, {
    id: 'col4',
    value: 'job',
  }],
  cells: [{
    id:'111',
    rowId: 'row1',
    columnId:'col1',
    value:'bot',
  }, {
    id:'222',
    rowId: 'row1',
    columnId: 'col2',
    value:'brown',
  }, {
    id:'333',
    rowId: 'row1',
    columnId: 'col3',
    value:'yes',
  }, {
    id:'444',
    rowId: 'row1',
    columnId: 'col4',
    value:'dev',
  }, {
    id:'555',
    rowId: 'row2',
    columnId: 'col1',
    value:'dehghani',
  }, {
    id:'666',
    rowId: 'row2',
    columnId: 'col2',
    value:'also brown',
  }, {
    id:'777',
    rowId: 'row2',
    columnId: 'col3',
    value: 'no',
  }, {
    id:'888',
    rowId: 'row2',
    columnId: 'col4',
    value: 'dev',
  }],
  isBeingEdited: false,
})

export default generateList