import * as React from 'react'
import classNames from 'classnames'

import { capitalizeFirstLetter } from '../../../helpers/general';

import '../style.scss'

const symbolsArr = ["e", "E", "+", "-", "."];

interface IProps {
  value: number
  setValue: React.Dispatch<React.SetStateAction<number>>
  title: string
  errorMessage?: string
}

export default ({ 
  value = 0, 
  setValue, 
  title,
  errorMessage = '' 
}: IProps) => {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;

    setValue(value)
  }

  return (
    <div className='input-group'>
      <p className='input-group__error'>{errorMessage}</p>
      <label htmlFor={title}>{capitalizeFirstLetter(title)}</label>
      <input 
        className={classNames({error: errorMessage})}
        id={title}
        name={title}
        value={value || ''}
        placeholder={`Input your ${title} value`}
        type='number'
        onChange={handleChange}
        onKeyDown={e => symbolsArr.includes(e.key) && e.preventDefault()}
      />
    </div>
  )
}