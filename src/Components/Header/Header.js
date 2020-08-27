import React from 'react'
import './HeaderStyles.css'
import Lego_bg from '../../Pictures/Lego_bg.png'

const Header = () => {
    return (
        <>
            <div className="Header">
                 <img className="Lego_bg" src={Lego_bg} alt="Lego background" />
            </div>
        </>
    )
}

export default Header