import * as React from 'react'

import { InputControll, InputNumber } from '../Input'
import Button from '../Button'

import { 
  moduleToDecimal,
  decimalToModule,
  isModuleToDecimalType,
  isDecimalToModuleType
} from '../../helpers/calculation/calculation'
import { printArray } from '../../helpers/general'
import { useGrounds, useLeftovers } from '../../hooks'
import { LeftOverList, GroundList,  } from '../../model'

import './style.scss'

interface IProps {
  calculationType: string
}

export default function ({ calculationType }: IProps) {
  const [decimal, setDecimal] = React.useState(0)
  const [error, setError] = React.useState('')
  const Ground: GroundList = useGrounds()
  const Leftover: LeftOverList = useLeftovers()

  React.useEffect(() => {
    setDecimal(0)
    Ground.clearList()
    Leftover.clearList()
    setError('')
  }, [calculationType])

  const calculate = () => {
    setError("")
    try {
      if (isModuleToDecimalType(calculationType)) { 
        setDecimal(moduleToDecimal(
          Leftover.getItems(),
          Ground.getItems()
        )) 
      } else {
        Leftover.setItems(decimalToModule(
          decimal,
          Ground.getItems()
        ))
      }
    } catch (e) {
      setError(e.userMessage)
    }
  }

  const handleChange = (value: number) => {
    setError("")
    setDecimal(value)
  }

  const showResult = () => 
    isModuleToDecimalType(calculationType)
            ? `${!!decimal ? 'Result:' : ''} ${decimal || ''}`
            : `${!!Leftover.getItems().length ? 'Result:' : ''} ${printArray(Leftover.getItems())}`

  return (
    <form id='form'>
      <p className='error'>{error}</p>
      <div className='form-group'>
      {isDecimalToModuleType(calculationType) && 
        <InputNumber 
          value={decimal} 
          setValue={handleChange} 
          title='decimal'
        />
      }
      <InputControll 
        items={Ground.getItems()}
        addItem={Ground.addItem}
        removeLastItem={Ground.removeLastItem}
        title='base'
        handleError={(m) => setError(m)}
      />
      {isModuleToDecimalType(calculationType) && 
        <InputControll 
          items={Leftover.getItems()}
          addItem={Leftover.addItem}
          removeLastItem={Leftover.removeLastItem}
          title='leftover'
          handleError={(m) => setError(m)}
        />
      }
      </div>
      <div className='form-action'>
        <Button handleClick={calculate}>Calculate</Button>
        <p>{showResult()}</p>
      </div>
    </form>
  )
}