import { IList, List } from './List'
import { removeLast } from '../helpers/general'
import { ListError } from './ListError'
import { getMultiplies, isRelativelyPrime } from '../helpers/calculation/calculation'

interface IGroundList extends IList {
  getMultiplies: () => number[][]
}

export class GroundList extends List implements IGroundList{
  protected multiplies: number[][]

  constructor(
    items: number[],
    updateItems: React.Dispatch<React.SetStateAction<any[]>>,
    multiplies: number[][]
  ) {
    super(items, updateItems)
    this.multiplies = multiplies
  }

  getMultiplies = () => this.multiplies

  removeLastItem = () => {
    this.updateItems((items) => items.length > 0 
    ? removeLast(items) 
    : items)
    this.multiplies.pop()
  }

  public addItem = (item: number, callback: () => void) => {
    if (item === 0) {
      throw new ListError("You can't add empty value or 0 in Base Input")
    } else if (!isRelativelyPrime(this.multiplies, item)) {
      throw new ListError("Numbers in Base must be coprime(relatively prime)")
    } else {
      this.updateItems((items) => {
        callback()
        this.multiplies[this.multiplies.length] = getMultiplies(item)
        return items.concat(item)
      })
    }
  }

  clearList = () => {
    this.updateItems(() => {
      this.multiplies = []
      return []
    })
  }
}