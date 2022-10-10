import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

function Nav() {

    return(
        <nav>
            <ul>
                <CustomLink to='/'>About</CustomLink>
                <CustomLink to="/portfolio">Portfolio</CustomLink>
                <CustomLink to="/resume">Résumé</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
            </ul>
        </nav>
    );
}

export default Nav;