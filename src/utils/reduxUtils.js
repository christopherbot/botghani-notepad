/*
 * Helper function to create payload objects. E.g.
 *
 * This:
 *     createAction(SET_VALUE, value => ({ value }))
 * Becomes:
 *     createAction(SET_VALUE, createPayload('value'))
 *
 * ------ OR ------
 *
 * This:
 *     createAction(SET_VALUE, (id, value, options) => ({ id, value, options }))
 * Becomes:
 *     createAction(SET_VALUE, createPayload('id', 'value', 'options'))
 */
export const createPayload = (...props) => (...args) =>
  props.reduce((payload, prop, index) => {
    payload[prop] = args[index]

    return payload
  }, {})

const createPayloadWithDate = (dateType) => (...props) => (...args) => {
  const payload = createPayload(...props)(...args)
  payload[dateType] = new Date().toISOString()

  return payload
}

export const createPayloadWithCreatedDate = createPayloadWithDate('createdAt')

export const createPayloadWithUpdatedDate = createPayloadWithDate('updatedAt')
