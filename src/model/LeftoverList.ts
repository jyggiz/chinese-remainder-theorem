import { IList, List } from './List'

export interface ILeftOverList extends IList {
  setItems: (items: number[]) => void
}

export class LeftOverList extends List implements ILeftOverList{
  constructor(items: number[], updateItems: React.Dispatch<React.SetStateAction<any[]>>) {
    super(items, updateItems)
  }

  setItems = (items: number[]) => {
    this.updateItems(items)
  }
}