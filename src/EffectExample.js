import React, {useEffect, useState} from 'react';
import './EffectExample.css'


function EffectExample() {
  const [counter, setCounter] = useState(0)

  // useEffect(()=> {
  //   window.document.title = counter 
  // }, [counter] )

  
  return(
    <div className = "container">
        <button onClick={()=> setCounter(counter+1)}>+</button>
        <span className="counterr">{counter}</span>
        <button onClick={()=> setCounter(counter-1)}>-</button>
    </div>
  )
}

export default EffectExample;
