import React, { createContext, useState } from 'react';

export const NumContext = createContext();

export default function FCNumContextProvider(props) {
  const [num, setNum] = useState(0);

  const Add2Number = () => {
    setNum(pervN => pervN + 2);
  }

  return (
    <NumContext.Provider value={{num, setNum, Add2Number}}>
      {props.children}
    </NumContext.Provider>
  )
}
