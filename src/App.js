import React from 'react';
import './App.css';
import Nav from './components/Nav/index';
import About from './components/About/index';
import Portfolio from './components/Portfolio/index';
import Resume from './components/Resume/index';
import Contact from './components/Contact/index';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          This will be John's portfolio Yes!
        </h1>
        <Nav />
      </header>
      <main className='elements'>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
      <footer>
        <p>This text will be footer items.</p>
      </footer>
    </div>
  );
}

export default App;
