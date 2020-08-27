import React from 'react'
import './ProductGridStyles.css'
import Lego_Ship from '../../Pictures/Lego_ship.jpg'
import Monster_truck from '../../Pictures/Monster_truck.jpg'

const ProductGrid = () => {
    return (
        <>
            <div className="ProductGrid">
                <div className="Lego_ship_container">
                    <img className="Lego_ship" src={Lego_Ship} alt="Lego ship"></img>
                    <span className="Price">2300 Kr</span>
                </div>
                <div className="Lego_ship_container">
                    <img className="Monster_truck" src={Monster_truck} alt="Monster truck "></img>
                    <span className="Price">2300 Kr</span>
                </div>
            </div>
        </>
    )
}

export default ProductGrid