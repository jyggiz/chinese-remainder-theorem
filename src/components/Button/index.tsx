import * as React from 'react'

interface IProps {
  handleClick: () => void
}

const Button: React.FunctionComponent<IProps> = ({ handleClick, children }) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    handleClick()
  }

  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

export default Button