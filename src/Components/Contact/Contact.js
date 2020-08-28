import React from 'react'
import './ContactStyles.css'

const Contact = () => {
    return (
        <>
            <div className="Contact">
                <div className="Contact_paper">
                    <h2 className="Presentation_headline">Contact Information</h2>
                    <div className="Contact_information_container">
                        <div>
                            <p className="bold">Adress:</p>
                            <p>ARK AB</p>
                            <p>Gatvägen 13</p>
                            <p>419 10 Göteborg, Sverige</p>
                        </div>
                        <div>
                            <p className="bold">Phone</p>
                            <p>+46 10 999 88 77</p>
                            <p className="bold">Email: </p>
                            <p>mailaddress@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="Contact_paper_2">
                    <h2 className="Presentation_headline">Contact</h2>
                    <form >
                        <div>
                            <label>
                                Name:
                                <input type="text" />
                            </label>
                        </div>
                        <div>
                            <label>
                                Last name:
                                <input type="text" />
                            </label>
                        </div>
                        <div>
                            <label>
                                Email:
                                <input type="text" />
                            </label>
                        </div>
                        <div>
                            <label>
                                Adress:
                                <input type="text" />
                            </label>
                        </div>
                        <div>
                            <label>
                                Zipcode:
                                <input type="text" />
                            </label>
                        </div>
                    </form>
                    <div className="Input_button">
                        <input type="submit" value="Submit" />
                    </div>

                </div>
            </div>
        </>
    )

}

export default Contact