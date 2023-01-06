import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {


  const [monstate, setMonstate] = useState(0);

  useEffect(() => {
    console.log("monstate", monstate);
  }, [monstate]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save toe reload.
        </p>
        <button onClick={() => setMonstate(monstate + 1)}>Click me</button>
        <p>{monstate}</p>
        
      </header>
    </div>
  );
}

export default App;
