import logo from './logo.svg';
import './App.css';
import Eheader from './EHeader';
import FCStudent2, {Eli} from './Functional Components/FCStudent';
import CCPerson from './Class Components/CCPerson';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {Eheader}
        <img src={logo} className="App-logo" alt="logo" />
        <p>Ruppin</p>
        <CCPerson id={27} />
        <FCStudent2 id={7} name="avi" grade={100} /> <br />  
        <FCStudent2 id={17} name={"benny"} grade={700} stam="s" />
        <Eli/>
      </header>
    </div>
  );
}

export default App;
