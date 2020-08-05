import * as React from "react";

import Form from '../components/form'
import Switch from '../components/switch'
import { calcTypes } from '../constants'

import './style.scss'

const App = () => {
  const [calcType, setCalcType] = React.useState(calcTypes.MODULE_TO_DECIMAL)

  const handleSwitch = (calcType: string) => {
    setCalcType(calcType)
  }

  return (
      <div id="container">
        <Switch 
          onSwitch={handleSwitch}
          calculationType={calcType}
        />
        <Form 
          calculationType={calcType}
        />
      </div>
  )
};

export default App;