import * as React from 'react'

import Button from '../../Button'
import NumberInput from '../number-input'

import { 
  capitalizeFirstLetter,
  printArray 
} from '../../../helpers/general'

import '../style.scss'

export interface IProps {
  items: number[]
  addItem: (ground: number, callback?: () => void) => void
  removeLastItem: () => void
  title: string
  handleError: (message: string) => void
}

export default ({ items, addItem, removeLastItem, title = 'Item', handleError }: IProps) => {
  const [currentItem, setCurrentItem] = React.useState(0)

  const capitalizeTitle = capitalizeFirstLetter(title)

  const handleAddItem = () => {
    try {
      addItem(currentItem, () => setCurrentItem(0))
    } catch (e) {
      handleError(e.userMessage)
    }
  }

  const handleChange = (value: number) => {
    handleError('')
    setCurrentItem(value)
  }

  return (
    <figure className='input-group'>
      <NumberInput 
        value={currentItem}
        setValue={handleChange}
        title={title}
      />
      <Button handleClick={handleAddItem}>Add {capitalizeTitle}</Button>
      <Button handleClick={removeLastItem}>Remove Last {capitalizeTitle}</Button>
      <p>[{printArray(items)}]</p>
    </figure>
  )
}