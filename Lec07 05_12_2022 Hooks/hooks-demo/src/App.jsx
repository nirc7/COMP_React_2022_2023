import { useContext, useEffect, useState } from 'react';
import './App.css';
import { NumContext } from './FCNumContext';
import FCSetNum from './FCSetNum';


function App() {
  const [counter, setCounter] = useState(0);
  const [txt, setTxt] = useState('...');
  const {num} = useContext(NumContext);

  useEffect(() => console.log('useeffect there was a render=', counter));

  useEffect(()=>console.log('uec =', counter), [counter]);

  useEffect(() => {
    console.log('component did mount!');
  
    return () => {
      console.log('will unmount...');
    }
  }, []) 
  

  return (
    <div className="App">
      <header className="App-header">
        <FCSetNum /> <br /> <br />
        counter={counter} <br />
        <button onClick={() => setCounter(7)}   >set 7</button> <br />
        <button onClick={() => setCounter(prevC => prevC + 1)}>add one</button> <br />
        txt={txt}
        <button onClick={() => setTxt('avi')} >txt change</button> <br />
        num={num}
      </header>
    </div>
  );
}

export default App;
