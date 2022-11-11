import React, { useState } from 'react';


const Folios = ({ genre }) => {

    // const [currentFolio, setCurrentFolio] = useState();

    const [items] = useState([
        {
            name: 'National Parks Project',
            genre: 'Web',
            description: '1',
            github: 'https://github.com/oak45985/projectone',
            site: 'https://oak45985.github.io/projectone/'
          },
          {
            name: 'SounDiscover',
            genre: 'Web',
            description: '2',
            github: 'https://github.com/oak45985/project_two',
            site: 'https://safe-escarpment-30150.herokuapp.com/'
          },
          {
            name: 'Work Comm',
            genre: 'Web',
            description: '3',
            github: 'https://github.com/oak45985/workcomm',
            site: 'https://sheltered-sea-51848.herokuapp.com/'
          },
          {
            name: 'HTML Portfolio',
            genre: 'Web',
            description: '4',
            github: 'https://github.com/oak45985/goodideas',
            site: 'https://oak45985.github.io/goodideas/'
          },
          {
            name: 'Photo Portfolio',
            genre: 'Web',
            description: '5',
            github: 'https://github.com/oak45985/photo-port',
            site: '/'
          },
          {
            name: 'Notetaker App',
            genre: 'Web',
            description: '6',
            github: 'https://github.com/oak45985/notetaker',
            site: 'https://stark-chamber-30879.herokuapp.com/'
          }
    ]);

    const currentItems = items.filter(item => item.genre === genre);

    return (
        <div>
            {currentItems.map((item) => (
                <p key={item.name} className="piece">{item.name}<br></br>
                <img src={require(`../../assets/folioimages/${item.name}.jpg`).default} alt={item.name} />
                   <a className="side"
                    href={item.github}
                  >GitHub
                  </a>
                  <a className="side"
                    href={item.site}
                  >Site
                  </a><br></br>
                  <br></br>
                </p>
            ))}
        </div>
    );
}

export default Folios;