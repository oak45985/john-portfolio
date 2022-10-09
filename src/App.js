import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {

  const [folios] = useState([
    {
      name: 'Web',
      description: 'Applications & sites made by yours truly (except where noted).',
    },
    {
      name: 'Print & 2D',
      description: 'Posters, logos, & other visual designs made by yours truly.'
    },
    {
      name: 'Video',
      description: 'Video work (shot & edited) by yours truly.'
    }
  ]);

  const [currentFolio, setCurrentFolio] = useState(folios[0]);

  const [contactFormSelected, setContactFormSelected] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          This will be John's portfolio
        </h1>
        <Nav
          folios={folios}
          setCurrentFolio={setCurrentFolio}
          currentFolio={currentFolio}
          contactFormSelected={contactFormSelected}
          setContactFormSelected={setContactFormSelected}
        ></Nav>
      </header>
      <main>
        {!contactFormSelected ? (
          <>
            <About currentFolio={currentFolio}></About>
            <Portfolio></Portfolio>
            <Resume></Resume>
          </>
        ) : (
          <Contact></Contact>
        )}
      </main>
      <footer>
        <p>This text will be footer items.</p>
      </footer>
    </div>
  );
}

export default App;
