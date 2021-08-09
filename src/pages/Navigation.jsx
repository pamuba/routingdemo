import React from 'react';
import {Link} from 'react-router-dom';

export const Navigation = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">First Page</Link>
            </li>
            <li>
                <Link to="/second">Second Page</Link>
            </li>
            <li>
                <Link to="/third">Third Page</Link>
            </li>
        </ul>
    </nav>
);