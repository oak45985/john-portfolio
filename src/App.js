import React from 'react';
import './App.css';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This will be John's portfolio
        </p>   
      </header>
      <main>
        <About></About>
      </main>
      <footer>
        <p>This text will be footer items.</p>
      </footer>
    </div>
  );
}

export default App;
