import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import About from './Pages/About';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import User from './Pages/User';

function App() {
  let num = 77;
  return (
    <div className="App">
      <div style={{ margin: 20, fontSize: 25 }}>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to={"/menu/" + num}>Menu</Link>
      </div>

      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu/:userId" element={<Menu />} />
          <Route path="/user/:userId" element={<User />} /> 
        </Routes>
      </header>
    </div>
  );
}

export default App;
