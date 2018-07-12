export const moveToHeadBy = (key, value) => array => {
  return array.reduce((acc, item) => {
    if (item[key] === value) {
      return [item, ...acc]
    }

    return [...acc, item]
  }, [])
}

export const moveFirstColumnToHead = moveToHeadBy('isFirstColumn', true)

export const swapValues = (array, index1, index2) => {
  const newArray = [...array]
  ;[newArray[index1], newArray[index2]] = [newArray[index2], newArray[index1]]

  return newArray
}
