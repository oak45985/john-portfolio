import React from 'react';

function Nav(props) {

    const {
        folios = [],
        currentFolio, 
        setCurrentFolio,
        contactFormSelected,
        setContactFormSelected
    } = props;

    return(
        <nav>
            <ul>
                <li>
                    <a data-testid="About" href="#about" onClick={() => setContactFormSelected(false)}>
                        About
                    </a>
                </li>
                <li className={`${contactFormSelected && 'navActive'}`}>
                    <span onClick={() => setContactFormSelected(true)}>Contact</span>
                </li>
                {folios.map((folio) => (
                    <li
                        className={`${
                            currentFolio.name === folio.name && !contactFormSelected && `navActive`
                        }`}
                        key={folio.name}>
                        <span onClick={() => {
                            setCurrentFolio(folio);
                            setContactFormSelected(false);
                        }}
                        >{(folio.name)}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;