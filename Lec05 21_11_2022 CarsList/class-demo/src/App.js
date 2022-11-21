import logo from './logo.svg';
import './App.css';
import EHeader from './Elements/EHeader';
import FCStudent from './Functional Comps/FCStudent';
import CCCar from './Class Comps/CCCar';
import CCarsList from './Functional Comps/FCCarsList';
import CCCarsListApp from './Class Comps/CCCarsListApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {EHeader}
        <CCCarsListApp/>
        {/* <CCCar lp={"11-22-33"} model="BMW" speed={200} /> */}
        {/* <FCStudent id={1} name="avi" grade={100} /> <br /> */}
        {/* <FCStudent id={1} name="avi" grade={70} /> */}
      </header>
    </div>
  );
}

export default App;
