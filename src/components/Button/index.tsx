import * as React from 'react'
import classNames from 'classnames'

import './style.scss'

interface IProps {
  handleClick: () => void
  styleType?: string
  isActive?: boolean
}

const Button: React.FunctionComponent<IProps> = ({ 
  handleClick, 
  children, 
  styleType = '', 
  isActive = false
}) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    handleClick()
  }

  return (
    <button 
      onClick={onClick} 
      className={classNames({
        [styleType]: !!styleType,
        active: isActive
      })}
    >
      {children}
    </button>
  )
}

export default Button