import React from 'react'
import './nav.css'

import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/sistema">
                <i className="fa fa-home"></i> Home
            </Link>
            <Link to="/sistema/cliente">
                <i className="fa fa-users"></i> Cliente
            </Link>
        </nav>
    </aside>