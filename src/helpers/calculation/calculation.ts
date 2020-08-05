import { calcTypes } from '../../constants'
import { ListError } from '../../model/ListError';

export const moduleToDecimal = (
  leftovers: number[],
  grounds: number[]
) => {

  if (leftovers.length < 1) {
    throw new ListError("Base array length cannot be shorter than 1")
  }

  if (grounds.length < 1) {
    throw new ListError("Leftover array length cannot be shorter than 1")
  }

  if (leftovers.length !== grounds.length) {
    throw new ListError('The length of the Base array and the Leftover array must be the same')
  }

  for (let i = 0; i < grounds.length; i++) {
    if (leftovers[i] < 0 || leftovers[i] >= grounds[i]) {
      throw new ListError(
        "Element in the Leftover array cannot be less than 0 or greater than its corresponding element in the Base array"
      )
    }
  }

  const composeQuantities = grounds.reduce((accum, ground) => ground * accum, 1);
  const quantities = grounds.map((ground) => composeQuantities / ground);

  const auxQuantities = quantities.map((M, i) => {
    const y = M % grounds[i];

    if (y === 0) {
      return leftovers[i]
    }

    for (let x = 1; x < grounds[i]; x++) {
      if (y * x % grounds[i] === leftovers[i]) {
        return x
      }
    }
  })

  return quantities.reduce((accum, M, i) => accum + M * auxQuantities[i], 0) % composeQuantities
}

export const decimalToModule = (
  decimal: number,
  grounds: number[]
) => {
  if (decimal === 0) {
    throw new ListError("Decimal value cannot be 0 or empty")
  }

  if (grounds.length < 1) {
    throw new ListError("Base array length cannot be shorter than 1")
  }

  return grounds.map(ground => decimal % ground)
}

export const isModuleToDecimalType = (calcType: string) => 
  calcType === calcTypes.MODULE_TO_DECIMAL

export const isDecimalToModuleType = (calcType: string) => 
  calcType === calcTypes.DECIMAL_TO_MODULE

export const isRelativelyPrime = (items: number[][], newItem: number) => {
  const newItems = items.reduce((accum, item) => [...accum, ...item], [])

  let isRelativelyPrime = true;
  const array = Array.from(Array(newItem).keys())
  array.forEach((item) => {
    if (item > 1 && newItem % item === 0 && newItems.includes(item)) {
      isRelativelyPrime = false;
    }
  })

  return isRelativelyPrime
}

export const getMultiplies = (value: number): number[] => {
  const items = Array.from(Array(value).keys())
  return items.reduce((accum, item) => 
    (item + 1) > 1 && value % (item + 1) === 0
      ? accum.concat(item + 1)
      : accum
  , [])
}