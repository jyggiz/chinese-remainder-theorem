import { removeLast } from '../helpers/general'
import { ListError } from './ListError'

export interface IList {
  getItems: () => number[]
  addItem: (item: number, callback: () => void) => void
  removeLastItem: () => void
  clearList: () => void
}

export class List implements IList{
  protected items: number[]
  protected updateItems: React.Dispatch<React.SetStateAction<any[]>>

  constructor(items: number[], updateItems: React.Dispatch<React.SetStateAction<any[]>>) {
    this.items = items
    this.updateItems = updateItems
  }

  getItems = (): number[] => this.items

  addItem = (item: number, callback: () => void) => {
    if (item === 0) {
      throw new ListError("You can't add empty value or 0 in Leftover Input")
    } else {
      this.updateItems((items) => {
        callback()
        return items.concat(item)
      })
    }
  }

  removeLastItem = () => {
    this.updateItems((items) => items.length > 0 
      ? removeLast(items) 
      : items
    )
  }

  clearList = () => {
    this.updateItems([])
  }
}