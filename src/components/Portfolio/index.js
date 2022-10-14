import React, { useState } from 'react';
import FolioList from '../../components/FolioList/index.js'
import SubNav from '../Nav/Subnav';

const Portfolio = () => {

    const [folios] = useState([
    {
      name: 'Web',
      description: 'Applications & sites made by yours truly.',
    },
    {
      name: 'Print & 2D',
      description: 'Posters, logos, & other visual designs made by yours truly. Coming Soon!'
    },
    {
      name: 'Video',
      description: 'Video work (shot & edited) by yours truly. Coming Soon!'
    }
  ]);

  const [currentFolio, setCurrentFolio] = useState(folios[0]);

    return(
        <section>
            <div>
                <SubNav
                    folios={folios}
                    setCurrentFolio={setCurrentFolio}
                    currentFolio={currentFolio}
                >
            </SubNav>
            </div>
            <article>
                <FolioList currentFolio={currentFolio}></FolioList>
            </article>
        </section>
    );
}

export default Portfolio;