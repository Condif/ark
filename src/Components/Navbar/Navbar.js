import React from 'react'
import './NavbarStyles.css'
import Logo from '../../Pictures/Ark_logo.png'

const Navbar = () => {
    return (
        <>
            <div className="Navbar">  
                <nav className="menu">
                    <img className="Logo" src={Logo} alt="Ark Logo" />
                    <div className="menu_right">
                        <ul className="menu_list">
                            <li className="products">
                                <button className="products_button">Products</button>
                            </li>
                            <li className="contact">
                                <button className="contact_button">Contact</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar