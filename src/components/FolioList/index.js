import React from 'react';
import Folios from '../Folios/index.js';

function FolioList(folios) {
    const { currentFolio } = folios;
    return(
        <section className='portfolioart'>
            <h1 data-testid="foliotitle">{(currentFolio.name)}</h1>
            <p>{currentFolio.description}</p>
            <br></br>
            <Folios genre={currentFolio.name} />
        </section>
    )
}

export default FolioList;