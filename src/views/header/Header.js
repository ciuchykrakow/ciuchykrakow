import React from 'react'
import Menu from './Menu'

const Header = ({ sites }) => (
    <div className="App-header">
        <h2>Ciuchy Kraków</h2>
        <Menu sites={sites} />
    </div>
)

export default Header
