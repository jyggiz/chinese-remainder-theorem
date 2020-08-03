import * as React from 'react'

import Button from '../Button'

import { 
  capitalizeFirstLetter,
  printArray 
} from '../../helpers/general'

export interface IProps {
  items: number[]
  addItem: (ground: number, callback?: () => void) => void
  removeLastItem: () => void
  title: string
}

export default ({ items, addItem, removeLastItem, title }: IProps) => {
  const [currentItem, setCurrentItem] = React.useState(0)
  const capitalizeTitle = capitalizeFirstLetter(title)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0
    setCurrentItem(value)
  }

  const handleAddItem = () => currentItem !== 0 
    ? addItem(currentItem, () => setCurrentItem(0))
    : setError("You can't add empty value or 0")

  return (
    <>
      <label htmlFor={`${title}s`}>{`${capitalizeTitle}s`}</label>
      <input 
        id={`${title}s`}
        name={`${title}s`}
        value={currentItem || ''}
        placeholder={`Input your ${title}`}
        type='number'
        onChange={handleChange}
      />
      <Button handleClick={handleAddItem}>Add {capitalizeTitle}</Button>
      <Button handleClick={() => removeLastItem()}>Remove Last {capitalizeTitle}</Button>
      <p>
        [{printArray(items)}]
      </p>
    </>
  )
}