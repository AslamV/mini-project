import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
function Navbar() {
    return (
        <nav className="flex items-center justify-between">
            <Link to='/'>
                <p className='font-title'>TRANS VIDEO</p>
            </Link>
            <ul className='flex justify-evenly w-52'>
                <li className='font-body mr-7'>Features</li>
                <li className='font-body'>F.A.Q</li>
            </ul>
        </nav>
    )
}

export default Navbar
