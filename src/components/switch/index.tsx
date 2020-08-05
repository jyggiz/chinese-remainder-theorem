import * as React from 'react'

import Button from '../Button'
import { calcTypes } from '../../constants'

import './style.scss'
import { isModuleToDecimalType, isDecimalToModuleType } from '../../helpers/calculation/calculation'

interface IProps {
  onSwitch: (caclType: string) => void
  calculationType: string
}

export default ({ onSwitch, calculationType }: IProps) => (
  <div id="switch" style={{ display: 'flex' }}>
    <Button 
      handleClick={() => onSwitch(calcTypes.MODULE_TO_DECIMAL)}
      styleType='switch'
      isActive={isModuleToDecimalType(calculationType)}
    >
      Module to Decimal
    </Button>
    <Button 
      handleClick={() => onSwitch(calcTypes.DECIMAL_TO_MODULE)}
      styleType='switch'
      isActive={isDecimalToModuleType(calculationType)}
    >
      Decimal to Module
    </Button>
  </div>
)