import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <ul className="app-navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pokemon-fight">Poke Fight</Link>
            </li>
        </ul>
    );
};

export default Navigation;
