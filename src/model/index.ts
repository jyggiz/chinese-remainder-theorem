import { removeLast } from '../helpers/general'

export interface IList {
  items: number[]
  updateItems: React.Dispatch<React.SetStateAction<any[]>>
  getItems: () => number[]
  addItem: (item: number, callback: () => void) => void
  removeLastItem: () => void
}

export interface ILeftOverList extends IList {
  setItems: (items: number[]) => void
}

export class List implements IList{
  items: number[]
  updateItems: React.Dispatch<React.SetStateAction<any[]>>

  constructor(items: number[], updateItems: React.Dispatch<React.SetStateAction<any[]>>) {
    this.items = items
    this.updateItems = updateItems
  }

  getItems = (): number[] => {
    return this.items
  }

  addItem = (item: number, callback: () => void) => {
    this.updateItems((items) => {
      callback()
      return items.concat(item)
    })
  }

  removeLastItem = () => {
    this.updateItems((items) => items.length > 0 
      ? removeLast(items) 
      : items
    )
  }
}

export class LeftOverList extends List {
  constructor(items: number[], updateItems: React.Dispatch<React.SetStateAction<any[]>>) {
    super(items, updateItems)
  }

  setItems = (items: number[]) => {
    this.items = items
  }
}