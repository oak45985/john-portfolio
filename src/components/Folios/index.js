import React, { useState } from 'react';

const Folios = ({ genre }) => {

    // const [currentFolio, setCurrentFolio] = useState();

    const [items] = useState([
        {
            name: 'Grocery aisle',
            genre: 'Web',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Grocery booth',
            genre: 'Web',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Building exterior',
            genre: 'Print & 2D',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Restaurant table',
            genre: 'Video',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Cafe interior',
            genre: 'Video',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
    ]);

    const currentItems = items.filter(item => item.genre === genre);

    return (
        <div>
            {currentItems.map((item) => (
                <p>{item.name}<br></br>
                    {item.genre}<br></br>
                   {item.description}<br></br>
                </p>
            ))}
        </div>
    );
}

export default Folios;