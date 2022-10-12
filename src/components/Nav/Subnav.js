import React from "react";

function SubNav(props) {

    const {
        folios = [],
        currentFolio, 
        setCurrentFolio
    } = props;

    return(
    <div className="subnav">
        <ul className="subnavul">
            {folios.map((folio) => (
                    <li className ={`${
                            currentFolio.name === folio.name && 'navActive'
                        }`}
                        key={folio.name}
                    >
                        <span onClick={() => {
                            setCurrentFolio(folio);
                        }}
                        >
                           {folio.name}
                        </span>
                    </li>
                ))}
        </ul>
    </div>
    )
}

export default SubNav;