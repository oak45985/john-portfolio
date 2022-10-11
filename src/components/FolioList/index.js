import React from 'react';
import Folios from '../Folios/index.js';

function FolioList(props) {
    const { currentFolio } = props;
    return(
        <section>
            <h1 data-testid="foliotitle">{(currentFolio.name)}</h1>
            <p>{currentFolio.description}</p>
            <Folios category={currentFolio.name} />
        </section>
    )
}

export default FolioList;