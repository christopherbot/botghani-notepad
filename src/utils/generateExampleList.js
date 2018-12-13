import uuidv4 from 'uuid/v4'

const generateList = () => ({
  id: uuidv4(),
  name: 'people',
  rows: [{
    id: 'row1',
    type: 'row',
    value: 'chris',
    isHeader: true,
  }, {
    id: 'row2',
    type: 'row',
    value: 'dave',
    isHeader: true,
  }],
  columns: [{
    id: uuidv4(),
    type: 'column',
    isFirstColumn: true,
    value: 'people',
    isHeader: true,
  }, {
    id: 'col1',
    type: 'column',
    value: 'last name',
    isHeader: true,
  }, {
    id: 'col2',
    type: 'column',
    value: 'hair color',
    isHeader: true,
  }, {
    id: 'col3',
    type: 'column',
    value: 'is cool',
    isHeader: true,
  }, {
    id: 'col4',
    type: 'column',
    value: 'job',
    isHeader: true,
  }],
  cells: [{
    id:'111',
    type: 'cell',
    rowId: 'row1',
    columnId:'col1',
    value:'bot',
  }, {
    id:'222',
    type: 'cell',
    rowId: 'row1',
    columnId: 'col2',
    value:'brown',
  }, {
    id:'333',
    type: 'cell',
    rowId: 'row1',
    columnId: 'col3',
    value:'yes',
  }, {
    id:'444',
    type: 'cell',
    rowId: 'row1',
    columnId: 'col4',
    value:'dev',
  }, {
    id:'555',
    type: 'cell',
    rowId: 'row2',
    columnId: 'col1',
    value:'dehghani',
  }, {
    id:'666',
    type: 'cell',
    rowId: 'row2',
    columnId: 'col2',
    value:'also brown',
  }, {
    id:'777',
    type: 'cell',
    rowId: 'row2',
    columnId: 'col3',
    value: 'no',
  }, {
    id:'888',
    type: 'cell',
    rowId: 'row2',
    columnId: 'col4',
    value: 'dev',
  }],
})

export default generateList
