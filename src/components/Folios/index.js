import React, { useState } from 'react';


const Folios = ({ genre }) => {

    // const [currentFolio, setCurrentFolio] = useState();

    const [items] = useState([
        {
            name: 'National Parks Project',
            genre: 'Web',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            github: 'https://github.com/oak45985/projectone',
            site: 'https://oak45985.github.io/projectone/'
          },
          {
            name: 'SounDiscover',
            genre: 'Web',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            github: 'https://github.com/oak45985/project_two',
            site: 'https://safe-escarpment-30150.herokuapp.com/'
          },
          {
            name: 'Run Buddy',
            genre: 'Web',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            github: 'https://github.com/oak45985/run-buddy',
            site: 'https://lernantino.github.io/run-buddy/'
          },
          {
            name: 'HTML Portfolio',
            genre: 'Web',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            github: 'https://github.com/oak45985/goodideas',
            site: 'https://oak45985.github.io/goodideas/'
          },
          {
            name: 'Photo Portfolio',
            genre: 'Web',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            github: 'https://github.com/oak45985/photo-port',
            site: '/'
          },
          {
            name: 'Run Buddy 3',
            genre: 'Web',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            github: 'https://github.com/oak45985/run-buddy',
            site: 'https://lernantino.github.io/run-buddy/'
          }
    ]);

    const currentItems = items.filter(item => item.genre === genre);

    return (
        <div>
            {currentItems.map((item) => (
                <p key={item.name}>{item.name}:<br></br>
                   <a
                    href={item.github}
                  >GitHub
                  </a><br></br>
                  <a
                    href={item.site}
                  >Site
                  </a><br></br>
                </p>
            ))}
        </div>
    );
}

export default Folios;