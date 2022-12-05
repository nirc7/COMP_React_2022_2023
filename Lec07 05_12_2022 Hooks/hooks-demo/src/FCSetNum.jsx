import React, { useContext } from 'react'
import FCAdd2Num from './FCAdd2Num';
import { NumContext } from './FCNumContext'

export default function FCSetNum() {
  const { setNum } = useContext(NumContext);

  return (
    <div>FCSetNum <br />
      <button onClick={() => setNum(7)} >setNum7</button> <br />
      <FCAdd2Num />
    </div>
  )
}
