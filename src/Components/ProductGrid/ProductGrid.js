import React from 'react'
import './ProductGridStyles.css'
import Lego_Ship from '../../Pictures/Lego_ship.jpg'
import Monster_truck from '../../Pictures/Monster_truck.jpg'

const ProductGrid = () => {
    return (
        <>
                <div className="ProductGrid">
                    <div className="Product_paper_container">
                    <div className="Product_headline"> <h1>Products</h1></div>
                        <div className="Product_container">
                            <div className="Product_paper">
                                <div className="Picture_container">
                                    <img className="Lego_ship" src={Lego_Ship} alt="Lego ship"></img>
                                    <span className="Price">Lego Millenium Falcon</span>
                                    <span className="Price">4 200:-</span>
                                </div>
                            </div>
                            <div className="Product_paper">
                                <div className="Picture_container">
                                    <img className="Monster_truck" src={Monster_truck} alt="Monster truck "></img>
                                    <span className="Price">Lego Monster Truck</span>
                                    <span className="Price">600:-</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
        </>
    )
}

export default ProductGrid