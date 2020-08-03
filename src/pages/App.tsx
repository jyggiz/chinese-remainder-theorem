import * as React from "react";

import Form from '../components/form'
import Switch from '../components/switch'

import { calcTypes } from '../constants'

export const CalcContext = React.createContext(calcTypes.MODULE_TO_DECIMAL)

const App = () => {
  const [calcType, setCalcType] = React.useState(calcTypes.MODULE_TO_DECIMAL)

  const handleSwitch = (calcType: string) => {
    setCalcType(calcType)
  }

  return (
    <CalcContext.Provider value={calcType}>
      <Switch onSwitch={handleSwitch}/>
      <Form />
    </CalcContext.Provider>
  )
};

export default App;