import React from 'react'
import './NavbarStyles.css'
import Logo from '../../Pictures/Ark_logo.png'

const Navbar = () => {
    return (
        <>
            <div className="Navbar">
                <img className="Logo" src={Logo} alt="Ark Logo" />

            </div>
        </>
    )
}

export default Navbar