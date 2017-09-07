import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({ sites }) => (
    <ul>
        {
            sites.map(({ name, path }) => (
                <li><Link to={path}>{name}</Link></li>
            ))
        }
    </ul>
)

export default Menu
