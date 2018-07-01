export const moveToHeadBy = (key, value) => array => {
  return array.reduce((acc, item) => {
    if (item[key] === value) {
      return [item, ...acc]
    }

    return [...acc, item]
  }, [])
}

export const moveFirstColumnToHead = moveToHeadBy('isFirstColumn', true)
