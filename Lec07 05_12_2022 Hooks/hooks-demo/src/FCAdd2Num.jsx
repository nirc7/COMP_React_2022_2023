import React, { useContext } from 'react';
import { NumContext } from './FCNumContext';

export default function FCAdd2Num () {
const {Add2Number} = useContext(NumContext);

  return (
    <div>FCAdd2Num <br />
    <button onClick={()=> Add2Number()}>Add2Num</button>
     </div>
  )
}
