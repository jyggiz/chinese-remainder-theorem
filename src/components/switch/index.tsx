import * as React from 'react'

import { calcTypes } from '../../constants'

interface IProps {
  onSwitch: (caclType: string) => void
}

export default ({ onSwitch }: IProps) => {
  return (
    <div>
      <button onClick={() => onSwitch(calcTypes.MODULE_TO_DECIMAL)}>Module to Decimal</button>
      <button onClick={() => onSwitch(calcTypes.DECIMAL_TO_MODULE)}>Decimal to Module</button>
    </div>
  )
}