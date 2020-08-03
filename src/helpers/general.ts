export const removeLast = (array: number[]) => {
  const [, ...rest] = array.reverse();
  return rest.reverse();
}

export const capitalizeFirstLetter = (value: string): string => 
  `${value[0].toUpperCase()}${value.substr(1)}`

export const printArray = (array: number[]): string => 
  array.reduce((accum, item) => accum ? `${accum}, ${item}` : `${item}`, '')
