import React, { useState } from 'react';
import Bulb  from './Bulb';


const App = () => {

    const [state, setState] = useState('on')

   const lightOn = () => {
        setState('on')
    }

    const lightOff = () => {
        setState('off')
    }

    return (

        <div>
           <button onClick={lightOn}>light On</button>
           <button onClick={lightOff}>light Off</button>

          <Bulb state={state} />
        </div>

       
    )
}

export default App;