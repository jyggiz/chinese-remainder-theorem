import * as React from 'react'

import InputControll from '../Input'
import { CalcContext } from '../../pages/App'
import Button from '../Button'

import { moduleToDecimal, decimalToModule } from '../../helpers/calculation'
import { printArray } from '../../helpers/general'
import { useGrounds, useLeftovers } from '../../hooks'
import { List, LeftOverList,  } from '../../model'
import { calcTypes } from '../../constants'

export default function () {
  const calculationType = React.useContext(CalcContext)
  const Ground: List = useGrounds()
  const Leftover: LeftOverList = useLeftovers()
  const [decimal, setDecimal] = React.useState(0)

  const isModuleToDecimalType = () => calculationType === calcTypes.MODULE_TO_DECIMAL
  const isDecimalToModuleType = () => calculationType === calcTypes.DECIMAL_TO_MODULE

  const handleDecimal = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;

    setDecimal(value)
  }

  const calculate = () => isModuleToDecimalType() 
    ? setDecimal(moduleToDecimal(
        Leftover.getItems(),
        Ground.getItems()
      ))
    : Leftover.setItems(decimalToModule(
        decimal,
        Ground.getItems()
      ))

  return (
    <form>
      {isDecimalToModuleType() && (
        <>
          <label htmlFor='decimal'>Decimal</label>
          <input 
            id='decimal'
            name='decimal'
            value={decimal || ''}
            placeholder='Input your decimal value'
            type='number'
            onChange={handleDecimal}
          />
        </>
      )}
      <InputControll 
        items={Ground.getItems()}
        addItem={Ground.addItem}
        removeLastItem={Ground.removeLastItem}
        title='ground'
      />
      {isModuleToDecimalType() && 
        <InputControll 
          items={Leftover.getItems()}
          addItem={Leftover.addItem}
          removeLastItem={Leftover.removeLastItem}
          title='leftover'
        />
      }
      <Button handleClick={calculate}>Calculate</Button>
      <p>
        {isModuleToDecimalType()
          ? decimal
          : printArray(Leftover.getItems())
        }
      </p>
    </form>
  )
}