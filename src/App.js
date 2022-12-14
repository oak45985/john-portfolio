import React from 'react';
import './styles.css';
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
          <a href='/'>
          John Logan
          </a>
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
        <p>
        <a href='https://github.com/oak45985'>GitHub</a>
        <a href='https://www.linkedin.com/in/john-oakley-4a279976/'>LinkedIn</a>
        <a href='https://www.instagram.com/n_vwls/'>Insta</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
